using AutoMapper;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Models.Restaurant;

namespace FoodOrdersApi.Services
{
    public interface IRestaurantService
    {
        int Create(CreateRestaurantDto dto);
        IEnumerable<RestaurantDto> GetAll();
        RestaurantDto GetByID(int id);
        int Update(int id, UpdateRestaurantDto dto);
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
        public IEnumerable<RestaurantDto> GetAll()
        {
            var restaurants = _context.Restaurants.ToList();
            var restaurantDtos = _mapper.Map<List<RestaurantDto>>(restaurants);

            return restaurantDtos;
        }


        // Get restaurant by ID
        public RestaurantDto GetByID(int id)
        {
            var restaurant = _context.Restaurants.FirstOrDefault(o => o.Id == id);
            if (restaurant == null) return null;

            var restaurantDto = _mapper.Map<RestaurantDto>(restaurant);

            return restaurantDto;
        }


        // Update restaurant with id
        public int Update(int id, UpdateRestaurantDto dto)
        {
            var restaurant = _context.Restaurants.FirstOrDefault(o => o.Id == id);
            if (restaurant == null) return -1;

            restaurant.Name = dto.Name ?? restaurant.Name;
            restaurant.Description = dto.Description ?? restaurant.Description;

            _context.SaveChanges();
            return restaurant.Id;
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
