namespace FoodOrdersApi.Models.Meal
{
    public class CreateMealDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }


        public int RestaurantId { get; set; }
    }
}
