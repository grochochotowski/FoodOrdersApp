using AutoMapper;
using FoodOrdersApi.Models.Cart;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Entities;
using Microsoft.EntityFrameworkCore;
using FoodOrdersApi.Entities.Enum;
using System.Linq.Expressions;
using FoodOrdersApi.Models.Organization;
using FoodOrdersApi.Models.Restaurant;
using FoodOrdersApi.Migrations;
using System.Linq;
using FoodOrdersApi.Models.Address;
using FoodOrdersApi.Models.Order;

namespace FoodCartsApi.Services
{
    public interface ICartService
    {
        int Create(CreateCartDto dto);
        PagedResult<CartListDto> GetAll(string restaurant, string organization, int page, string sortBy, SortDirection sortDireciton);
        DetailsCartDto GetById(int id);
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

            var isOrganization = _context.Organizations.FirstOrDefault(u => u.Id == dto.OrganizationId);
            if (isOrganization == null) return -3;

            cart.TotalCartPrice = 0;
            _context.Carts.Add(cart);
            _context.SaveChanges();
            return cart.Id;
        }


        // Get all carts
        public PagedResult<CartListDto> GetAll(string restaurant, string organization, int page, string sortBy, SortDirection sortDireciton)
        {
            var baseQuery = _context.Carts
                .Include(c => c.Restaurant)
                .Include(c => c.Organization)
                .Where(c => restaurant == null || c.Restaurant.Name.ToLower().Contains(restaurant))
                .Where(c => organization == null || c.Organization.Name.ToLower().Contains(organization));

            if (!string.IsNullOrEmpty(sortBy))
            {
                var columnsSelector = new Dictionary<string, Expression<Func<Cart, object>>>
                {
                    { "restaurant", c => c.Restaurant.Name},
                    { "organization", c => c.Organization.Name},
                    { "totalCartPrice", c => c.TotalCartPrice},
                    { "deliveryPrice", c => c.DeliveryPrice}
                };

                var selectedColumn = columnsSelector[sortBy];

                baseQuery = sortDireciton == SortDirection.ASC
                    ? baseQuery.OrderBy(selectedColumn)
                    : baseQuery.OrderByDescending(selectedColumn);
            }

            var carts = baseQuery
                .Skip(10 * (page - 1))
                .Take(10)
                .Select(c => new CartListDto
                {
                    Id = c.Id,
                    Restaurant = c.Restaurant.Name,
                    Organization = c.Organization.Name,
                    TotalCartPrice = c.TotalCartPrice,
                    MinPrice = c.MinPrice,
                    DeliveryPrice = c.DeliveryPrice
                })
                .ToList();

            var totalCount = baseQuery.Count();

            var result = new PagedResult<CartListDto>(carts, totalCount, page);

            return result;
        }


        // Get cart by ID
        public DetailsCartDto GetById(int id)
        {
            var cart = _context.Carts
                 .Include(c => c.Restaurant)
                 .Include(c => c.Organization)
                 .Include(c => c.Address)
                 .Select(c => new DetailsCartDto
                 {
                     Id = c.Id,
                     MinPrice = c.MinPrice,
                     TotalCartPrice = c.TotalCartPrice,
                     DeliveryPrice = c.DeliveryPrice,
                     FreeDeliveryMinPrice = c.FreeDeliveryMinPrice,
                     PhoneNumber = c.PhoneNumber,
                     BankAccountNumber = c.BankAccountNumber,
                     Note = c.Note,
                     Restaurant = c.Restaurant.Name,
                     Organization = c.Organization.Name,
                     Address = new AddressDto
                     {
                         Id = c.Address.Id,
                         Country = c.Address.Country,
                         City = c.Address.City,
                         Street = c.Address.Street,
                         Building = c.Address.Building,
                         Premises = c.Address.Premises
                     }
                 })
                 .FirstOrDefault(o => o.Id == id);
            if (cart == null) return null;

            var cartDto = _mapper.Map<DetailsCartDto>(cart);

            return cartDto;
        }


        // Update cart with id
        public int Update(int id, UpdateCartDto dto)
        {
            var cartToUpdate = _context.Carts.FirstOrDefault(o => o.Id == id);
            if (cartToUpdate == null) return -1;

            cartToUpdate.MinPrice = dto.MinPrice;
            cartToUpdate.DeliveryPrice = dto.DeliveryPrice;
            cartToUpdate.FreeDeliveryMinPrice = dto.FreeDeliveryMinPrice;
            cartToUpdate.PhoneNumber = dto.PhoneNumber;
            cartToUpdate.BankAccountNumber = dto.BankAccountNumber;
            cartToUpdate.Note = dto.Note;

            var addressToUpdate = _context.Addresses.FirstOrDefault(a => a.Id == cartToUpdate.AddressId);
            if (addressToUpdate != null)
            {
                addressToUpdate.Country = dto.Country;
                addressToUpdate.City = dto.City;
                addressToUpdate.Street = dto.Street;
                addressToUpdate.Building = dto.Building;
                addressToUpdate.Premises = dto.Premises;
            }

            _context.SaveChanges();
            return cartToUpdate.Id;
        }


        // Delete cart with id
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
