using AutoMapper;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models.Cart;
using FoodOrdersApi.Models.Organization;

namespace FoodOrdersApi.Services
{
    public interface IOrgService
    {
        int Create(CreateOrganizationDto dto);
        IEnumerable<OrganizationListDto> GetAll();
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
        public IEnumerable<OrganizationListDto> GetAll()
        {
            var organizations = _context.Organizations
                .Select(o => new OrganizationListDto
                {
                    Id = o.Id,
                    Name = o.Name
                });
            var organizationsDtos = _mapper.Map<List<OrganizationListDto>>(organizations);

            return organizationsDtos;
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
