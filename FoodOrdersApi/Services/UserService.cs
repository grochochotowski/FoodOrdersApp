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
        UserDto GetByID(int id);
        int Update(int id, UpdateUserDto dto);
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

        // Get user by ID
        public UserDto GetByID(int id)
        {
            var user = _context.Users.FirstOrDefault(o => o.Id == id);
            if (user == null) return null;

            var userDto = _mapper.Map<UserDto>(user);

            return userDto;
        }

        // Update user with id
        public int Update(int id, UpdateUserDto dto)
        {
            var user = _context.Users.FirstOrDefault(o => o.Id == id);
            if (user == null) return -1;

            var isOrg = _context.Organizations.FirstOrDefault(o => o.Id == dto.OrganizationId);
            if (isOrg == null) return -2;

            user.FirstName = dto.FirstName ?? user.FirstName;
            user.SecondName = dto.SecondName ?? user.SecondName;
            user.LastName = dto.LastName ?? user.LastName;
            user.Email = dto.Email ?? user.Email;
            user.Note = dto.Note ?? user.Note;
            user.OrganizationId = dto.OrganizationId ?? user.OrganizationId;

            _context.SaveChanges();
            return user.Id;
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
