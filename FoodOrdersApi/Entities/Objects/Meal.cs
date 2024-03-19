using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities.Objects
{
    public class Meal
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Food name is required")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }



        [Required(ErrorMessage = "Meal has to be connected to a restaurant")]
        public int RestaurantId { get; set; }
        public virtual Restaurant Restaurant { get; set; }



        public virtual ICollection<Order> Orders { get; set; }
    }
}
