using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities
{
    public class Restaurant
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Name of the restaurant is required")]
        [Display(Name = "Restaurant Name")]
        public string Name { get; set; }
        [Display(Name = "Restaurant Description")]
        public string? Description { get; set; }
    }
}
