using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Models
{
    public class OrgDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Note { get; set; }
    }
}
