using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities
{
    public class Organization
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        public string? Note { get; set; }
    }
}
