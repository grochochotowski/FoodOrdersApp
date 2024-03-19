namespace FoodOrdersApi.Models.Meal
{
    public class CreateMealDto
    {
        public string Name { get; set; }
        public string Description { get; set; }


        public int RestaurantId { get; set; }
    }
}
