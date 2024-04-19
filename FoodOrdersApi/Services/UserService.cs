using AutoMapper;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models.Order;
using FoodOrdersApi.Models.User;
using Microsoft.EntityFrameworkCore;

namespace FoodOrdersApi.Services
{
    public interface IUserService
    {
        int Create(CreateUserDto dto);
        IEnumerable<UserDto> GetAll();
        int Delete(int id);
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



        // Create new user
        public int Create(CreateUserDto dto)
        {
            var user = _mapper.Map<User>(dto);

            var isOrg = _context.Organizations.FirstOrDefault(o => o.Id == user.OrganizationId);
            if (isOrg == null) return -1;

            _context.Users.Add(user);
            _context.SaveChanges();
            return user.Id;
        }

        // Get all user
        public IEnumerable<UserDto> GetAll()
        {
            var users = _context.Users
                .Include(u => u.Organization)
                .Select(u => new UserDto
                {
                    Id = u.Id,
                    FirstName = u.FirstName,
                    LastName = u.LastName,
                    OrganizationId = u.OrganizationId,
                    OrganizationName = u.Organization.Name
                })
                .ToList();
            var userDtos = _mapper.Map<List<UserDto>>(users);

            return userDtos;
        }

        // Update user with id
        public int Delete(int id)
        {
            var user = _context.Users.FirstOrDefault(o => o.Id == id);
            if (user == null) return -1;

            _context.Users.Remove(user);
            _context.SaveChanges();
            return 1;
        }

    }
}
