using AutoMapper;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Entities.Enum;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models.Cart;
using FoodOrdersApi.Models.Order;
using FoodOrdersApi.Models.User;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace FoodOrdersApi.Services
{
    public interface IUserService
    {
        int Create(CreateUserDto dto);
        PagedResult<UserListDto> GetAll(int page, string sortBy, SortDirection sortDireciton);
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
        public PagedResult<UserListDto> GetAll(int page, string sortBy, SortDirection sortDireciton)
        {
            var baseQuery = _context.Users
                .Include(u => u.Organization)
                .AsQueryable();

            if (!string.IsNullOrEmpty(sortBy))
            {
                var columnsSelector = new Dictionary<string, Expression<Func<User, object>>>
                {
                    { "firstName", u => u.FirstName},
                    { "secondName", u => u.SecondName},
                    { "lastName", u => u.LastName},
                    { "organizationName", u => u.Organization.Name}
                };

                var selectedColumn = columnsSelector[sortBy];

                baseQuery = sortDireciton == SortDirection.ASC
                    ? baseQuery.OrderBy(selectedColumn)
                    : baseQuery.OrderByDescending(selectedColumn);
            }

            var users = baseQuery
                .Skip(10 * (page - 1))
                .Take(10)
                .Select(u => new UserListDto
                {
                    Id = u.Id,
                    FirstName = u.FirstName,
                    SecondName = u.SecondName,
                    LastName = u.LastName,
                    OrganizationId = u.OrganizationId,
                    OrganizationName = u.Organization.Name
                })
                .ToList();

            var totalCount = baseQuery.Count();

            var result = new PagedResult<UserListDto>(users, totalCount, page);

            return result;
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
