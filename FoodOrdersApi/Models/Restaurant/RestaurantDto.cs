using FoodOrdersApi.Models.Meal;

namespace FoodOrdersApi.Models.Restaurant
{
    public class RestaurantDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }



        public ICollection<MealDto> Meals { get; set; }
    }
}
