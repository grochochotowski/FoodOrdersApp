using AutoMapper;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Services
{
    public class UserService
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
