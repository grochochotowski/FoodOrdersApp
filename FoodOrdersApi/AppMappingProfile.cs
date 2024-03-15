using AutoMapper;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Models;

namespace FoodOrdersApi
{
    public class AppMappingProfile : Profile
    {
        public AppMappingProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<CreateUserDto, User>();

            //CreateMap<Organization, OrgDto>();
            CreateMap<CreateOrgDto, Organization>();
        }
    }
}
