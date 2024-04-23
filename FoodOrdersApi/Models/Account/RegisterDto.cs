using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Models.Account
{
    public class RegisterDto
    {
        [Required]
        [MinLength(6)]
        public string Login { get; set; }
        [Required]
        [MinLength(6)]
        public string Password { get; set; }
        [Required]
        [MinLength(6)]
        public string ConfirmPassword { get; set; }
    }
}
