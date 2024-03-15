using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities
{
    public class IndividualOrder
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Individual order has to be connected in bigger order")]
        public int OrderId { get; set; }
        
        [Required(ErrorMessage = "User is required")]
        public int UserId { get; set; }

        public string? Notes { get; set; }


        public virtual Order Order { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Meal>? Meals { get; set; }
    }
}
