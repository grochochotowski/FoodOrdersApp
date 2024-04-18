using FoodOrdersApi.Models.Cart;

namespace FoodOrdersApi.Models.User
{
    public class UserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }


        public int OrganizationId { get; set; }
        public string OrganizationName { get; set; }
    }
}
