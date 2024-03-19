using AutoMapper;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Models.Order;

namespace FoodOrdersApi.Services
{
    public interface IOrderService
    {
        int Create(CreateOrderDto dto);
        IEnumerable<OrderDto> GetAll();
        OrderDto GetByID(int id);
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
            if (order == null) return -1;

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
            
            if (dto.UserId != null)
            {
                var isUser = _context.Users.FirstOrDefault(u => u.Id == dto.UserId);
                if (isUser == null) return -2;
            }
            if (dto.CartId != null)
            {
                var isCart = _context.Carts.FirstOrDefault(u => u.Id == dto.CartId);
                if (isCart == null) return -3;
            }
            

            order.Notes = dto.Notes ?? order.Notes;
            order.CartId = dto.CartId ?? order.CartId;
            order.UserId = dto.UserId ?? order.UserId;

            _context.SaveChanges();
            return order.Id;
        }


        // Update order with id
        public int Delete(int id)
        {
            var order = _context.Orders.FirstOrDefault(o => o.Id == id);
            if (order == null) return -1;

            _context.Orders.Remove(order);
            _context.SaveChanges();
            return 1;
        }

    }
}
