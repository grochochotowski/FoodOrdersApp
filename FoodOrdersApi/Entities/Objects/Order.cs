using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities.Objects
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Total price is required")]
        public double TotalPrice { get; set; }

        public string? Notes { get; set; }



        [Required(ErrorMessage = "Individual order has to be connected to cart")]
        public int CartId { get; set; }
        public virtual Cart Cart { get; set; }



        [Required(ErrorMessage = "User is required")]
        public int UserId { get; set; }
        public virtual User User { get; set; }



        public virtual ICollection<MealOrder> MealOrder { get; set; }
    }
}
