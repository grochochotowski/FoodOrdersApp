using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Models.Org
{
    public class OrganizationDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Note { get; set; }
    }
}
