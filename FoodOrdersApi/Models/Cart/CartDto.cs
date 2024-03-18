using FoodOrdersApi.Models.Address;
using FoodOrdersApi.Models.Restaurant;

namespace FoodOrdersApi.Models.Cart
{
    public class CartDto
    {
        public int Id { get; set; }
        public double MinPrice { get; set; }
        public double DeliveryPrice { get; set; }
        public double FreeDeliveryMinPrice { get; set; }
        public string PhoneNumber { get; set; }
        public string BankAccountNumber { get; set; }
        public string? Note { get; set; }


        public int RestaurantId { get; set; }
        public RestaurantDto Restaurant { get; set; }


        public int AddressId { get; set; }
        public AddressDto Address { get; set; }
    }
}
