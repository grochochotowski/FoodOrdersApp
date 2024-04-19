using AutoMapper;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Models.Order;
using Microsoft.EntityFrameworkCore;
using FoodOrdersApi.Entities.Enum;
using System.Linq.Expressions;
using FoodOrdersApi.Models.MealOrder;

namespace FoodOrdersApi.Services
{
    public interface IOrderService
    {
        int Create(CreateOrderDto dto);
        PagedResult<OrderListDto> GetAll(string filters, int page, string sortBy, SortDirection sortDireciton);
        DetailsOrderDto GetByID(int id);
        OrderEditDto GetEdit(int id);
        IEnumerable<IndividualOrderDto> GetFromCart(int id);
        int Update(int id, UpdateOrderDto dto);
        int Delete(int id);
    }

    public class OrderService : IOrderService
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public OrderService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }



        // Create new order
        public int Create(CreateOrderDto dto)
        {
            var order = _mapper.Map<Order>(dto);

            var user = _context.Users.FirstOrDefault(u => u.Id == dto.UserId);
            if (user == null) return -2;

            var cart = _context.Carts
                .FirstOrDefault(u => u.Id == dto.CartId);
            if (cart == null) return -3;


            _context.Orders.Add(order);
            _context.SaveChanges();
            return order.Id;
        }


        // Get all carts
        public PagedResult<OrderListDto> GetAll(string filters, int page, string sortBy, SortDirection sortDireciton)
        {
            var baseQuery = _context.Orders
                .Include(o => o.Cart).ThenInclude(c => c.Restaurant)
                .Include(o => o.Cart).ThenInclude(c => c.Organization)
                .Include(o => o.User)
                .Where(o => filters == null || (
                    o.Cart.Restaurant.Name.ToLower().Contains(filters) ||
                    o.Cart.Organization.Name.ToLower().Contains(filters)) ||
                    o.Id.ToString().Contains(filters));

            if (!string.IsNullOrEmpty(sortBy))
            {
                var columnsSelector = new Dictionary<string, Expression<Func<Order, object>>>
                {
                    { "id", o => o.Id },
                    { "name", o => new { o.User.FirstName, o.User.LastName }},
                    { "organization", o => o.Cart.Organization.Name},
                    { "restaurant", o => o.Cart.Restaurant.Name},
                    { "totalPrice", o => o.TotalPrice},
                    { "positions", o => o.Positions}
                };

                var selectedColumn = columnsSelector[sortBy];

                if (sortBy != "name")
                {
                    baseQuery = sortDireciton == SortDirection.ASC
                        ? baseQuery.OrderBy(selectedColumn)
                        : baseQuery.OrderByDescending(selectedColumn);
                }
                else
                {
                    baseQuery = sortDireciton == SortDirection.ASC
                        ? baseQuery.OrderBy(o => o.User.FirstName).ThenBy(o => o.User.LastName)
                        : baseQuery.OrderByDescending(o => o.User.FirstName).ThenByDescending(o => o.User.LastName);
                }
            }

            var carts = baseQuery
                .Skip(10 * (page - 1))
                .Take(10)
                .Select(o => new OrderListDto
                {
                    Id = o.Id,
                    Name = string.Concat(o.User.FirstName, " ", o.User.LastName),
                    Organization = o.Cart.Organization.Name,
                    Restaurant = o.Cart.Restaurant.Name,
                    Positions = o.Positions,
                    TotalPrice = o.TotalPrice,

                })
                .ToList();

            var totalCount = baseQuery.Count();

            var result = new PagedResult<OrderListDto>(carts, totalCount, page);

            return result;
        }


        // Get order by ID
        public DetailsOrderDto GetByID(int id)
        {
            var order = _context.Orders
                .Include(o => o.MealOrder)
                .Include(o => o.User)
                .Include(o => o.Cart)
                .Select(o => new DetailsOrderDto
                {
                    Id = o.Id,
                    TotalPrice = o.TotalPrice,
                    NumberOfMeals = o.MealOrder.Sum(mo => mo.Quantity),
                    Notes = o.Notes,
                    Restaurant = o.Cart.Restaurant.Name,
                    Organization = o.Cart.Organization.Name,
                    Cart = o.CartId,
                    User = string.Concat(o.User.FirstName, " ", (o.User.SecondName != null ? o.User.SecondName + " " : ""), o.User.LastName)
                })
                .FirstOrDefault(o => o.Id == id);
            if (order == null) return null;

            var orderDto = _mapper.Map<DetailsOrderDto>(order);

            return orderDto;
        }


        // Get edit order by ID
        public OrderEditDto GetEdit(int id)
        {
            var order = _context.Orders
                .Include(o => o.Cart)
                .Select(c => new OrderEditDto
                {
                    Id = c.Id,
                    Notes = c.Notes,
                    Cart = c.CartId,
                    Restaurant = c.Cart.RestaurantId
                })
                .FirstOrDefault(o => o.Id == id);
            if (order == null) return null;

            var orderDto = _mapper.Map<OrderEditDto>(order);

            return orderDto;
        }


        // Get all orders from a cart
        public IEnumerable<IndividualOrderDto> GetFromCart(int id)
        {
            var cart = _context.Carts.
                FirstOrDefault(c => c.Id == id);

            var orders = _context.Orders
                .Include(o => o.User)
                .Where(o => o.CartId == id)
                .Select(o => new IndividualOrderDto
                {
                    Id =  o.Id,
                    Positions =  o.Positions,
                    TotalPrice = o.TotalPrice,
                    User = string.Concat(o.User.FirstName, " ", o.User.LastName)
                })
                .ToList();
            var orderDtos = _mapper.Map<List<IndividualOrderDto>>(orders);

            return orderDtos;
        }


        // Update order with id
        public int Update(int id, UpdateOrderDto dto)
        {
            var order = _context.Orders.FirstOrDefault(o => o.Id == id);
            if (order == null) return -1;

            order.Notes = dto.Notes;

            _context.SaveChanges();
            return order.Id;
        }


        // Delete order with id
        public int Delete(int id)
        {
            var order = _context.Orders
                .Include(o => o.Cart)
                .FirstOrDefault(o => o.Id == id);
            if (order == null) return -1;

            order.Cart.TotalCartPrice -= order.TotalPrice;
            _context.Orders.Remove(order);
            _context.SaveChanges();
            return 1;
        }
    }
}
