using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities.Objects
{
    public class Organization
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }



        public virtual ICollection<Cart>? Carts { get; set; }
    }
}
