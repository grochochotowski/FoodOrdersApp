using AutoMapper;
using FoodOrdersApi.Models.Cart;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodCartsApi.Services
{
    public interface ICartService
    {
        int Create(CreateCartDto dto);
        PagedResult<CartDto> GetAll(string restaurant, string organization, int pageNumber);
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

            var isRestaurant = _context.Restaurants.FirstOrDefault(u => u.Id == dto.RestaurantId);
            if (isRestaurant == null) return -2;

            var isAddress = _context.Addresses.FirstOrDefault(u => u.Id == dto.AddressId);
            if (isAddress == null) return -3;

            cart.TotalCartPrice = 0;
            _context.Carts.Add(cart);
            _context.SaveChanges();
            return cart.Id;
        }


        // Get all carts
        public PagedResult<CartDto> GetAll(string restaurant, string organization, int page)
        {
            var baseQuery = _context.Carts
                .Include(c => c.Restaurant)
                .Include(c => c.Organization)
                .Where(c => restaurant == null || c.Restaurant.Name.ToLower().Contains(restaurant))
                .Where(c => organization == null || c.Organization.Name.ToLower().Contains(organization));

            var carts = baseQuery
                .Skip(10 * (page - 1))
                .Take(10)
                .ToList();

            var totalCount = baseQuery.Count();

            var cartDtos = _mapper.Map<List<CartDto>>(carts);

            var result = new PagedResult<CartDto>(cartDtos, totalCount, page);

            return result;
        }


        // Get cart by ID
        public CartDto GetByID(int id)
        {
            var cart = _context.Carts
                 .Include(c => c.Restaurant).ThenInclude(r => r.Meals)
                 .Include(c => c.Address)
                 .Include(c => c.IndividualOrders!).ThenInclude(io => io.MealOrder)
                 .Include(c => c.IndividualOrders!).ThenInclude(io => io.User)
                 .FirstOrDefault(o => o.Id == id);
            if (cart == null) return null;

            var cartDto = _mapper.Map<CartDto>(cart);

            return cartDto;
        }


        // Update cart with id
        public int Update(int id, UpdateCartDto dto)
        {
            var cart = _context.Carts.FirstOrDefault(o => o.Id == id);
            if (cart == null) return -1;

            if (dto.AddressId != null)
            {
                var isAddress = _context.Addresses.FirstOrDefault(u => u.Id == dto.AddressId);
                if (isAddress == null) return -3;
            }


            cart.MinPrice = dto.MinPrice ?? cart.MinPrice;
            cart.DeliveryPrice = dto.DeliveryPrice ?? cart.DeliveryPrice;
            cart.FreeDeliveryMinPrice = dto.FreeDeliveryMinPrice ?? cart.FreeDeliveryMinPrice;
            cart.PhoneNumber = dto.PhoneNumber ?? cart.PhoneNumber;
            cart.BankAccountNumber = dto.BankAccountNumber ?? cart.BankAccountNumber;
            cart.Note = dto.Note ?? cart.Note;
            cart.AddressId = dto.AddressId ?? cart.AddressId;

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
