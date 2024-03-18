using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Models.Org
{
    public class CreateMealDto
    {
        public string Name { get; set; }
        public string Description { get; set; }


        public int RestaurantId { get; set; }
    }
}
