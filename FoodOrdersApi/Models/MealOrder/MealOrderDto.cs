using FoodOrdersApi.Models.Meal;
using FoodOrdersApi.Models.Order;

namespace FoodOrdersApi.Models.MealOrder
{
    public class MealOrderDto
    {
        public MealDto Meal { get; set; }
        public int Quantity { get; set; }
    }
}
