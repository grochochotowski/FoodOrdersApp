using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Restaurant ID is required")]
        public int RestaurantId { get; set; }

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
    }
}
