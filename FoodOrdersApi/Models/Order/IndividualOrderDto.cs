namespace FoodOrdersApi.Models.Order
{
    public class IndividualOrderDto
    {
        public int Id { get; set; }
        public int Positions { get; set; }
        public double TotalPrice { get; set; }
        public string User { get; set; }
    }
}
