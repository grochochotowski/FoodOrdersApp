using FoodOrdersApi.Entities.Objects;
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
        public virtual UserDto User { get; set; }


        public virtual ICollection<Meal>? Meals { get; set; }
    }
}
