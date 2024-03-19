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
        int Update(int id, CreateOrderDto dto);
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
        public int Update(int id, CreateOrderDto dto)
        {
            var order = _context.Orders
                .FirstOrDefault(o => o.Id == id);

            if (order == null) return 0;

            order.Country = dto.Country;
            order.City = dto.City;
            order.Street = dto.Street;
            order.Building = dto.Building;
            order.Premises = dto.Premises;

            _context.SaveChanges();
            return order.Id;
        }


        // Update order with id
        public int Delete(int id)
        {
            var order = _context.Orders
                .FirstOrDefault(o => o.Id == id);

            if (order == null) return 0;

            _context.Orders.Remove(order);
            _context.SaveChanges();
            return 1;
        }

    }
}
