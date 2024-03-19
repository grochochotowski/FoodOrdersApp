namespace FoodOrdersApi.Models.Order
{
    public class UpdateOrderDto
    {
        public string? Notes { get; set; }


        public int? CartId { get; set; }
        public int? UserId { get; set; }
    }
}
