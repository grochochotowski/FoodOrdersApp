namespace FoodOrdersApi.Models.Meal
{
    public class MealDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }


        public int RestaurantId { get; set; }
    }
}
