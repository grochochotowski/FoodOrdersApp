using AutoMapper;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Services
{
    public interface IUserService
    {
        int Create(CreateUserDto dto);
    }

    public class UserService : IUserService
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public UserService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public int Create(CreateUserDto dto)
        {
            var user = _mapper.Map<User>(dto);
            _context.Users.Add(user);
            _context.SaveChanges();

            return user.Id;
        }
    }
}
