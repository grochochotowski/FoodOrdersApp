namespace FoodOrdersApi.Models.MealOrder
{
    public class MealsFromOrder
    {
        public int Id { get; set; }
        public string Key { get; set; }
        public string Img { get; set; }
        public string Meal { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
    }
}
