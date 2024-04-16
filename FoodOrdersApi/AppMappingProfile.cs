using AutoMapper;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models.Address;
using FoodOrdersApi.Models.Cart;
using FoodOrdersApi.Models.Meal;
using FoodOrdersApi.Models.MealOrder;
using FoodOrdersApi.Models.Order;
using FoodOrdersApi.Models.Organization;
using FoodOrdersApi.Models.Restaurant;
using FoodOrdersApi.Models.User;

namespace FoodOrdersApi
{
    public class AppMappingProfile : Profile
    {
        public AppMappingProfile()
        {
            CreateMap<Address, AddressDto>();
            CreateMap<CreateAddressDto, Address>();
            CreateMap<UpdateAddressDto, Address>();

            CreateMap<Cart, CartDto>();
            CreateMap<Cart, CartListDto>();
            CreateMap<Cart, DetailsCartDto>();
            CreateMap<CreateCartDto, Cart>()
                .ForMember(r => r.Address, c => c.MapFrom(dto => new Address()
                {
                    Country = dto.Country,
                    City = dto.City,
                    Street = dto.Street,
                    Building = dto.Building,
                    Premises = dto.Premises
                }));
            CreateMap<UpdateCartDto, Cart>();

            CreateMap<Meal, MealDto>();
            CreateMap<CreateMealDto, Meal>();
            CreateMap<UpdateMealDto, Meal>();

            CreateMap<MealOrderDto, MealOrder>();
            CreateMap<MealOrder, MealOrderDto>();

            CreateMap<Order, OrderDto>();
            CreateMap<Order, OrderListDto>();
            CreateMap<Order, DetailsOrderDto>();
            CreateMap<CreateOrderDto, Order>();
            CreateMap<UpdateOrderDto, Order>();

            CreateMap<Organization, OrganizationDto>();
            CreateMap<Organization, OrganizationListDto>();
            CreateMap<CreateOrganizationDto, Organization>();
            CreateMap<UpdateOrganizationDto, Organization>();

            CreateMap<Restaurant, RestaurantDto>();
            CreateMap<Restaurant, RestaurantListDto>();
            CreateMap<CreateRestaurantDto, Restaurant>();
            CreateMap<UpdateRestaurantDto, Restaurant>();

            CreateMap<User, UserDto>();
            CreateMap<CreateUserDto, User>();
            CreateMap<UpdateUserDto, User>();
        }
    }
}
