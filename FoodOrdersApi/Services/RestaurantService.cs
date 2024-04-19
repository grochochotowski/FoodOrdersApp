using AutoMapper;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Models.Restaurant;
using Microsoft.EntityFrameworkCore;
using FoodOrdersApi.Models.Cart;
using FoodOrdersApi.Entities.Enum;
using System.Linq.Expressions;
using FoodOrdersApi.Models.User;

namespace FoodOrdersApi.Services
{
    public interface IRestaurantService
    {
        int Create(CreateRestaurantDto dto);
        PagedResult<RestaurantListDto> GetAll(int page, string sortBy, SortDirection sortDireciton);
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
        public PagedResult<RestaurantListDto> GetAll(int page, string sortBy, SortDirection sortDireciton)
        {
            var baseQuery = _context.Restaurants
                .Include(r => r.Meals)
                .AsQueryable();

            if (!string.IsNullOrEmpty(sortBy))
            {
                var columnsSelector = new Dictionary<string, Expression<Func<Restaurant, object>>>
                {
                    { "name", u => u.Name},
                    { "category", u => u.Category},
                    { "mealsCount", u => u.Meals.Count()}
                };

                var selectedColumn = columnsSelector[sortBy];

                baseQuery = sortDireciton == SortDirection.ASC
                    ? baseQuery.OrderBy(selectedColumn)
                    : baseQuery.OrderByDescending(selectedColumn);
            }

            var restaurants = baseQuery
                .Skip(10 * (page - 1))
                .Take(10)
                .Select(r => new RestaurantListDto
                {
                    Id = r.Id,
                    Name = r.Name,
                    Category = r.Category,
                    MealsCount = r.Meals.Count()
                })
                .ToList();

            var totalCount = baseQuery.Count();

            var result = new PagedResult<RestaurantListDto>(restaurants, totalCount, page);

            return result;
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
