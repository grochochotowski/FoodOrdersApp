using FoodOrdersApi.Models.Cart;

namespace FoodOrdersApi.Models.User
{
    public class UserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }


        public string Organization { get; set; }
    }
}
