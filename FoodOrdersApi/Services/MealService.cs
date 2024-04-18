using AutoMapper;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models.Meal;
using FoodOrdersApi.Models.MealOrder;
using FoodOrdersApi.Models.Order;
using Microsoft.EntityFrameworkCore;

namespace FoodOrdersApi.Services
{
    public interface IMealService
    {
        int Create(CreateMealDto dto);
        IEnumerable<MealDto> GetAll();
        MealDto GetByID(int id);
        IEnumerable<MealsFromOrder> GetFromOrder(int id);
        IEnumerable<MealsFromRestaurant> GetFromRestaurant(int id);
        int Update(int id, UpdateMealDto dto);
        int Delete(int id);
        List<string> AddMeal(int id, AddMealOrder dto);
    }

    public class MealService : IMealService
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public MealService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }



        // Create new meal
        public int Create(CreateMealDto dto)
        {
            var meal = _mapper.Map<Meal>(dto);

            var isOrg = _context.Organizations.FirstOrDefault(o => o.Id == meal.RestaurantId);
            if (isOrg == null) return -1;

            _context.Meals.Add(meal);
            _context.SaveChanges();
            return meal.Id;
        }


        // Get all meal
        public IEnumerable<MealDto> GetAll()
        {
            var meals = _context.Meals.ToList();
            var mealDtos = _mapper.Map<List<MealDto>>(meals);

            return mealDtos;
        }


        // Get meal by ID
        public MealDto GetByID(int id)
        {
            var meal = _context.Meals.FirstOrDefault(o => o.Id == id);
            if (meal == null) return null;

            var mealDto = _mapper.Map<MealDto>(meal);

            return mealDto;
        }

        // Get all meals from an order
        public IEnumerable<MealsFromOrder> GetFromOrder(int id)
        {
            var meals = _context.MealOrder
                .Include(mo => mo.Meal)
                .Where(mo => mo.OrderId == id)
                .Select(mo => new MealsFromOrder
                {
                    Id = mo.MealId.ToString() + "||" + mo.OrderId.ToString(),
                    Img = mo.Meal.Img,
                    Meal = mo.Meal.Name,
                    Price = mo.Quantity * mo.Meal.Price,
                    Quantity = mo.Quantity
                })
                .ToList();
            var mealOrderDtos = _mapper.Map<List<MealsFromOrder>>(meals);

            return mealOrderDtos;
        }

        // Get all meals from a restaurant
        public IEnumerable<MealsFromRestaurant> GetFromRestaurant(int id)
        {
            var meals = _context.Meals
                .Where(m => m.RestaurantId == id)
                .Select(m => new MealsFromRestaurant
                {
                    Id = m.Id,
                    Img = m.Img,
                    Name = m.Name,
                    Price = m.Price
                })
                .ToList();
            var mealOrderDtos = _mapper.Map<List<MealsFromRestaurant>>(meals);

            return mealOrderDtos;
        }

        // Update meal with id
        public int Update(int id, UpdateMealDto dto)
        {
            var meal = _context.Meals.FirstOrDefault(o => o.Id == id);
            if (meal == null) return -1;

            meal.Name = dto.Name ?? meal.Name;
            meal.Description = dto.Description ?? meal.Description;

            _context.SaveChanges();
            return meal.Id;
        }

        // Delete meal with id
        public int Delete(int id)
        {
            var meal = _context.Meals.FirstOrDefault(o => o.Id == id);
            if (meal == null) return -1;

            _context.Meals.Remove(meal);
            _context.SaveChanges();
            return 1;
        }

        // Add meals to order with id
        public List<string> AddMeal(int id, AddMealOrder addMealOrder)
        {
            var returns = new List<string>();

            var order = _context.Orders
                .Include(o => o.Cart)               
                .Include(o => o.MealOrder).ThenInclude(mo => mo.Meal)
                .FirstOrDefault(o => o.Id == id);
            if (order == null)
            {
                returns.Add($"Order with id {id} does not exist");
                return returns;
            }

            double newPrice = 0;

            var newMeal = _context.Meals.FirstOrDefault(mo => mo.Id == addMealOrder.MealId);
            if (newMeal == null)
            {
                returns.Add($"Meal with id {addMealOrder.MealId} does not exist");
            }
            else if (order.Cart.RestaurantId != newMeal.RestaurantId)
            {
                returns.Add($"Meal with id {addMealOrder.MealId} does not belong to restaurant with id {addMealOrder.MealId}");
            }

            var mealOrder = _context.MealOrder.FirstOrDefault(mo => mo.OrderId == id && mo.MealId == addMealOrder.MealId)
                ?? order.MealOrder.FirstOrDefault(mo => mo.OrderId == id && mo.MealId == addMealOrder.MealId);
            if (mealOrder != null)
            {
                mealOrder.Quantity += addMealOrder.Quantity;
            }
            else
            {
                mealOrder = new MealOrder(addMealOrder.MealId, order.Id, addMealOrder.Quantity);
                order.MealOrder.Add(mealOrder);
                order.Positions++;
            }
            newPrice += newMeal.Price * addMealOrder.Quantity;

            order.TotalPrice += newPrice;
            order.Cart.TotalCartPrice += newPrice;
            _context.SaveChanges();
            return returns;
        }

    }
}
