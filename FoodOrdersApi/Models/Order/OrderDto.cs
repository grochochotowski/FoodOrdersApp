using FoodOrdersApi.Models.Meal;
using FoodOrdersApi.Models.MealOrder;
using FoodOrdersApi.Models.User;

namespace FoodOrdersApi.Models.Order
{
    public class OrderDto
    {
        public int Id { get; set; }
        public double TotalPrice { get; set; }
        public string? Notes { get; set; }


        public int CartId { get; set; }


        public UserDto User { get; set; }


        public ICollection<MealOrderDto>? Meals { get; set; }
    }
}
