namespace FoodOrdersApi.Models.User
{
    public class UserListDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string LastName { get; set; }


        public int OrganizationId { get; set; }
        public string OrganizationName { get; set; }
    }
}
