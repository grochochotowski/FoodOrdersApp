using FoodOrdersApi.Models.Address;
using FoodOrdersApi.Models.Order;

namespace FoodOrdersApi.Models.Cart
{
    public class DetailsCartDto
    {
        public int Id { get; set; }
        public double MinPrice { get; set; }
        public double TotalCartPrice { get; set; }
        public double DeliveryPrice { get; set; }
        public double FreeDeliveryMinPrice { get; set; }
        public string PhoneNumber { get; set; }
        public string BankAccountNumber { get; set; }
        public string? Note { get; set; }


        public string Organization { get; set; }
        public string Restaurant { get; set; }
        public int AddressId { get; set; }
    }
}
