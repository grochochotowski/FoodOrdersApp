using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities.Objects
{
    public class Cart
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Mininimum order price is required")]
        public double MinPrice { get; set; }
        [Required(ErrorMessage = "Delivery price is required")]
        public double DeliveryPrice { get; set; }
        [Required(ErrorMessage = "Free delivery minimum price is required")]
        public double FreeDeliveryMinPrice { get; set; }
        [Required(ErrorMessage = "Phone number is required")]
        public string PhoneNumber { get; set; }
        [Required(ErrorMessage = "Bank account number is required")]
        public string BankAccountNumber { get; set; }

        public string? Note { get; set; }



        [Required(ErrorMessage = "User is required")]
        public int UserId { get; set; }
        public virtual User User { get; set; }



        [Required(ErrorMessage = "Restaurant is required")]
        public int RestaurantId { get; set; }
        public virtual Restaurant Restaurant { get; set; }



        [Required(ErrorMessage = "Address is required")]
        public int AddressId { get; set; }
        public virtual Address Address { get; set; }



        public virtual ICollection<Order>? IndividualOrders { get; }
    }
}
