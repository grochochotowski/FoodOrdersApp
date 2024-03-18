using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models.Address;
using FoodOrdersApi.Models.Org;
using System.ComponentModel.DataAnnotations;

namespace FoodOrdersApi.Models.Restaurant
{
    public class RestaurantDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }



        public int AddressId { get; set; }
        public AddressDto Address { get; set; }



        public ICollection<MealDto> Meals { get; set; }
    }
}
