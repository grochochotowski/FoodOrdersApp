using FoodOrdersApi.Models.Address;
using FoodOrdersApi.Models.Order;
using FoodOrdersApi.Models.Restaurant;
using FoodOrdersApi.Models.User;

namespace FoodOrdersApi.Models.Cart
{
    public class CartDto
    {
        public int Id { get; set; }
        public double MinPrice { get; set; }
        public double TotalCartPrice { get; set; }
        public double DeliveryPrice { get; set; }
        public double FreeDeliveryMinPrice { get; set; }
        public string PhoneNumber { get; set; }
        public string BankAccountNumber { get; set; }
        public string? Note { get; set; }


        public virtual UserDto User { get; set; }
        public virtual RestaurantDto Restaurant { get; set; }
        public virtual AddressDto Address { get; set; }
        public virtual ICollection<OrderDto>? IndividualOrders { get; set; }
    }
}
