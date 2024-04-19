using AutoMapper;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Models.Restaurant;
using Microsoft.EntityFrameworkCore;
using FoodOrdersApi.Models.Cart;

namespace FoodOrdersApi.Services
{
    public interface IRestaurantService
    {
        int Create(CreateRestaurantDto dto);
        IEnumerable<RestaurantListDto> GetAll();
        int Delete(int id);
    }

    public class RestaurantService : IRestaurantService
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public RestaurantService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }



        // Create new restaurant
        public int Create(CreateRestaurantDto dto)
        {
            var restaurant = _mapper.Map<Restaurant>(dto);

            _context.Restaurants.Add(restaurant);
            _context.SaveChanges();
            return restaurant.Id;
        }

        // Get all restaurants
        public IEnumerable<RestaurantListDto> GetAll()
        {
            var restaurants = _context.Restaurants
                .Include(r => r.Meals)
                .ToList()
                .Select(r => new RestaurantListDto
                {
                    Id = r.Id,
                    Name = r.Name,
                    Description = r.Description,
                    MealsCount = r.Meals.Count()
                });
            var restaurantDtos = _mapper.Map<List<RestaurantListDto>>(restaurants);

            return restaurantDtos;
        }

        // Update restaurant with id
        public int Delete(int id)
        {
            var restaurant = _context.Restaurants.FirstOrDefault(o => o.Id == id);
            if (restaurant == null) return -1;

            _context.Restaurants.Remove(restaurant);
            _context.SaveChanges();
            return 1;
        }

    }
}
