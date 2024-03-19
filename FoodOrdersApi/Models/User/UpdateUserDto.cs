namespace FoodOrdersApi.Models.User
{
    public class UpdateUserDto
    {
        public string? FirstName { get; set; }
        public string? SecondName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Note { get; set; }


        public int? OrganizationId { get; set; }
    }
}
