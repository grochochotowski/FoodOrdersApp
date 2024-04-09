namespace FoodOrdersApi.Models.Cart
{
    public class CartListDto
    {
        public int Id { get; set; }
        public string Organization { get; set; }
        public string Restaurant { get; set; }
        public double TotalCartPrice { get; set; }
        public double MinPrice { get; set; }
        public double DeliveryPrice { get; set; }
    }
}
