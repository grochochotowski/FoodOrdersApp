using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models.Restaurant;
using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Models.Org
{
    public class MealDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int RestaurantId { get; set; }
        public virtual RestaurantDto Restaurant { get; set; }
    }
}
