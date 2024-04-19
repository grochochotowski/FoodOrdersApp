namespace FoodOrdersApi.Models.Restaurant
{
    public class RestaurantListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }


        public int MealsCount { get; set; }
    }
}
