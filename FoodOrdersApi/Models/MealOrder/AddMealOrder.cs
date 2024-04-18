using Microsoft.EntityFrameworkCore.Metadata.Conventions;

namespace FoodOrdersApi.Models.MealOrder
{
    public class AddMealOrder
    {
        public Tuple<int, int> Meal { get; set; }
    }
}
