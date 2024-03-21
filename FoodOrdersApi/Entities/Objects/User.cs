using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Entities.Objects
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "First name is requierd")]
        public string FirstName { get; set; }

        public string? SecondName { get; set; }
        [Required(ErrorMessage = "Last name is requierd")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Email is requierd")]
        public string Email { get; set; }

        public string? Note { get; set; }



        [Required(ErrorMessage = "Organization ID is requierd")]
        public int OrganizationId { get; set; }
        public virtual Org Organization { get; set; }



        public virtual ICollection<Cart>? Carts { get; set; }
    }
}
