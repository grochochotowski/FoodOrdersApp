namespace FoodOrdersApi.Models.Restaurant
{
    public class CreateRestaurantDto
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public int AddressId { get; set; }
    }
}
