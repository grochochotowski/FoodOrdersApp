namespace FoodOrdersApi.Models.Order
{
    public class OrderEditDto
    {
        public int Id { get; set; }
        public string? Notes { get; set; }
        public int Cart { get; set; }
        public int Restaurant { get; set; }
    }
}
