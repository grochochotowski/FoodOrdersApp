namespace FoodOrdersApi.Models.User
{
    public class CreateUserDto
    {
        public string FirstName { get; set; }
        public string? SecondName { get; set; }
        public string LastName { get; set; }
        

        public int OrganizationId { get; set; }
    }
}
