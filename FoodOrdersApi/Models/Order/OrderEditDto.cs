namespace FoodOrdersApi.Models.Order
{
    public class OrderEditDto
    {
        public int Id { get; set; }
        public string? Note { get; set; }
        public int Cart { get; set; }
    }
}
