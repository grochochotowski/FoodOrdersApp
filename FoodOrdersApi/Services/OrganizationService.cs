using AutoMapper;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Entities.Enum;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models.Cart;
using FoodOrdersApi.Models.Organization;
using FoodOrdersApi.Models.Restaurant;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace FoodOrdersApi.Services
{
    public interface IOrgService
    {
        int Create(CreateOrganizationDto dto);
        PagedResult<OrganizationListDto> GetAll(int page);
        int Delete(int id);
    }

    public class OrganizationService : IOrgService
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public OrganizationService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

         

        // Create new organization
        public int Create(CreateOrganizationDto dto)
        {
            var org = _mapper.Map<Organization>(dto);

            _context.Organizations.Add(org);
            _context.SaveChanges();
            return org.Id;
        }

        // Get all organizations
        public PagedResult<OrganizationListDto> GetAll(int page)
        {
            var organizations = _context.Organizations
                .Skip(10 * (page - 1))
                .Take(10)
                .Select(o => new OrganizationListDto
                {
                    Id = o.Id,
                    Name = o.Name
                })
                .ToList();

            var totalCount = organizations.Count();

            var result = new PagedResult<OrganizationListDto>(organizations, totalCount, page);

            return result;
        }

        // Update organization with id
        public int Delete(int id)
        {
            var org = _context.Organizations.FirstOrDefault(o => o.Id == id);
            if (org == null) return -1;

            _context.Organizations.Remove(org);
            _context.SaveChanges();
            return 1;
        }

    }
}
