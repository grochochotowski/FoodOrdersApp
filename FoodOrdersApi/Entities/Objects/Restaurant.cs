using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities.Objects
{
    public class Restaurant
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Name of the restaurant is required")]
        public string Name { get; set; }

        public string? Description { get; set; }



        public virtual ICollection<Meal>? Meals { get; set; }
    }
}
