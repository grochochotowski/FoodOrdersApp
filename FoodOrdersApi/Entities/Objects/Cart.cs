using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities.Objects
{
    public class Cart
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public double MinPrice { get; set; }
        [Required]
        public double TotalCartPrice { get; set; }
        [Required]
        public double DeliveryPrice { get; set; }
        [Required]
        public double FreeDeliveryMinPrice { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string BankAccountNumber { get; set; }

        public string? Note { get; set; }



        [Required]
        public int UserId { get; set; }
        public virtual User User { get; set; }



        [Required]
        public int RestaurantId { get; set; }
        public virtual Restaurant Restaurant { get; set; }



        [Required]
        public int AddressId { get; set; }
        public virtual Address Address { get; set; }



        public virtual ICollection<Order>? IndividualOrders { get; }
    }
}
