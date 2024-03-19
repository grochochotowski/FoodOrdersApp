using AutoMapper;
using FoodCartsApi.Entities.Objects;
using FoodCartsApi.Entities;
using FoodCartsApi.Models.Cart;
using FoodOrdersApi.Models.Cart;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Entities;

namespace FoodCartsApi.Services
{
    public interface ICartService
    {
        int Create(CreateCartDto dto);
        IEnumerable<CartDto> GetAll();
        CartDto GetByID(int id);
        int Update(int id, UpdateCartDto dto);
        int Delete(int id);
    }

    public class CartService : ICartService
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public CartService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }



        // Create new cart
        public int Create(CreateCartDto dto)
        {
            var cart = _mapper.Map<Cart>(dto);

            var isUser = _context.Users.FirstOrDefault(u => u.Id == dto.UserId);
            if (isUser == null) return -2;

            var isCart = _context.Carts.FirstOrDefault(u => u.Id == dto.CartId);
            if (isCart == null) return -3;

            _context.Carts.Add(cart);
            _context.SaveChanges();
            return cart.Id;
        }


        // Get all carts
        public IEnumerable<CartDto> GetAll()
        {
            var carts = _context.Carts.ToList();
            var cartDtos = _mapper.Map<List<CartDto>>(carts);

            return cartDtos;
        }


        // Get cart by ID
        public CartDto GetByID(int id)
        {
            var cart = _context.Carts.FirstOrDefault(o => o.Id == id);
            if (cart == null) return null;

            var cartDto = _mapper.Map<CartDto>(cart);

            return cartDto;
        }


        // Update cart with id
        public int Update(int id, UpdateCartDto dto)
        {
            var cart = _context.Carts.FirstOrDefault(o => o.Id == id);
            if (cart == null) return -1;

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


            cart.Notes = dto.Notes ?? cart.Notes;
            cart.CartId = dto.CartId ?? cart.CartId;
            cart.UserId = dto.UserId ?? cart.UserId;

            _context.SaveChanges();
            return cart.Id;
        }


        // Update cart with id
        public int Delete(int id)
        {
            var cart = _context.Carts.FirstOrDefault(o => o.Id == id);
            if (cart == null) return -1;

            _context.Carts.Remove(cart);
            _context.SaveChanges();
            return 1;
        }

    }
}
