using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities
{
    public class Meal
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Food name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }
    }
}
