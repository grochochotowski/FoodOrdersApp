using Microsoft.EntityFrameworkCore.Metadata.Conventions;

namespace FoodOrdersApi.Models.Order
{
    public class AddOrderMeal
    {
        public List<int> meal { get; set; }
    }
}
