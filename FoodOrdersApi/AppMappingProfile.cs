﻿using AutoMapper;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models;

namespace FoodOrdersApi
{
    public class AppMappingProfile : Profile
    {
        public AppMappingProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<CreateUserDto, User>();

            CreateMap<Org, OrgDto>();
            CreateMap<CreateOrgDto, Org>();
        }
    }
}
