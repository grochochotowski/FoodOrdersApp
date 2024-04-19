namespace FoodOrdersApi.Models.Order
{
    public class OrderListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Organization { get; set; }
        public string Restaurant { get; set; }
        public double Positions { get; set; }
        public double TotalPrice { get; set; }
    }
}
