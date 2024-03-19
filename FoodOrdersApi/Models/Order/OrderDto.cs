using FoodOrdersApi.Models.Meal;
using FoodOrdersApi.Models.User;

namespace FoodOrdersApi.Models.Order
{
    public class OrderDto
    {
        public int Id { get; set; }
        public int TotalPrice { get; set; }
        public string? Notes { get; set; }


        public int CartId { get; set; }


        public int UserId { get; set; }
        public UserDto User { get; set; }


        public ICollection<MealDto>? Meals { get; set; }
    }
}
