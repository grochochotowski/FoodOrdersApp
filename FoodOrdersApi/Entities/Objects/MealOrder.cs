using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace FoodOrdersApi.Entities.Objects
{
    public class MealOrder
    {
        [Key, Column("MealId", Order = 0)]
        public int MealId { get; set; }
        [Key, Column("OrderId", Order = 1)]
        public int OrderId { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}
