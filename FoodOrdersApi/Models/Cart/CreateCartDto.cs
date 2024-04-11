namespace FoodOrdersApi.Models.Cart
{
    public class CreateCartDto
    {
        public double MinPrice { get; set; }
        public double DeliveryPrice { get; set; }
        public double FreeDeliveryMinPrice { get; set; }
        public string PhoneNumber { get; set; }
        public string BankAccountNumber { get; set; }
        public string? Note { get; set; }


        public string Country { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string Building { get; set; }
        public string? Premises { get; set; }


        public int OrganizationId { get; set; }
        public int RestaurantId { get; set; }
    }
}
