using AutoMapper;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Models.Order;
using Microsoft.EntityFrameworkCore;

namespace FoodOrdersApi.Services
{
    public interface IOrderService
    {
        int Create(CreateOrderDto dto);
        IEnumerable<OrderDto> GetAll();
        OrderDto GetByID(int id);
        int Update(int id, UpdateOrderDto dto);
        int Delete(int id);
        List<string> AddMeal(int id, AddOrderMeal dto);
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

            var isUser = _context.Users.FirstOrDefault(u => u.Id == dto.UserId);
            if (isUser == null) return -2;

            var isCart = _context.Carts.FirstOrDefault(u => u.Id == dto.CartId);
            if (isCart == null) return -3;

            _context.Orders.Add(order);
            _context.SaveChanges();
            return order.Id;
        }


        // Get all orders
        public IEnumerable<OrderDto> GetAll()
        {
            var orders = _context.Orders.ToList();
            var orderDtos = _mapper.Map<List<OrderDto>>(orders);

            return orderDtos;
        }


        // Get order by ID
        public OrderDto GetByID(int id)
        {
            var order = _context.Orders.FirstOrDefault(o => o.Id == id);
            if (order == null) return null;

            var orderDto = _mapper.Map<OrderDto>(order);

            return orderDto;
        }


        // Update order with id
        public int Update(int id, UpdateOrderDto dto)
        {
            var order = _context.Orders.FirstOrDefault(o => o.Id == id);
            if (order == null) return -1;
            

            order.Notes = dto.Notes ?? order.Notes;

            _context.SaveChanges();
            return order.Id;
        }


        // Delete order with id
        public int Delete(int id)
        {
            var order = _context.Orders.FirstOrDefault(o => o.Id == id);
            if (order == null) return -1;

            _context.Orders.Remove(order);
            _context.SaveChanges();
            return 1;
        }


        // Add meals to order with id
        public List<string> AddMeal(int id, AddOrderMeal dto)
        {
            var returns = new List<string>();

            var order = _context.Orders
                .Include(o => o.Cart)
                    .ThenInclude(c => c.Restaurant)
                        .ThenInclude(r => r.Meals)
                .FirstOrDefault(o => o.Id == id);
            if (order == null) {
                returns.Add($"Order with id {id} does not exist");
                return returns;
            }

            foreach (var mealId in dto.meal)
            {
                var newMeal = _context.Meals.FirstOrDefault(m => m.Id == mealId);
                if (newMeal == null)
                {
                    returns.Add($"Meal with id {mealId} does not exist");
                    Console.WriteLine($"I am here in not existing {mealId}");
                    continue;
                }
                else if (!order.Cart.Restaurant.Meals.Contains(newMeal))
                {
                    returns.Add($"Meal with id {mealId} does not belong to restaurant {order.Cart.Restaurant.Name} with id {order.Cart.Restaurant.Id}");
                    Console.WriteLine($"I am in wrong restaurant {mealId}");
                    continue;
                }
                else order.Meals.Add(newMeal);
            }

            _context.SaveChanges();
            return returns;
        }

    }
}
