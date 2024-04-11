using AutoMapper;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models.Organization;

namespace FoodOrdersApi.Services
{
    public interface IOrgService
    {
        int Create(CreateOrganizationDto dto);
        IEnumerable<OrganizationDto> GetAll();
        OrganizationDto GetByID(int id);
        int Update(int id, UpdateOrganizationDto dto);
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
        public IEnumerable<OrganizationDto> GetAll()
        {
            var orgs = _context.Organizations.ToList();
            var orgDtos = _mapper.Map<List<OrganizationDto>>(orgs);

            return orgDtos;
        }


        // Get organization by ID
        public OrganizationDto GetByID(int id)
        {
            var org = _context.Organizations.FirstOrDefault(o => o.Id == id);
            if (org == null) return null;

            var orgDto = _mapper.Map<OrganizationDto>(org);

            return orgDto;
        }


        // Update organization with id
        public int Update(int id, UpdateOrganizationDto dto)
        {
            var org = _context.Organizations.FirstOrDefault(o => o.Id == id);
            if (org == null) return -1;

            org.Name = dto.Name ?? org.Name;
            org.Note = dto.Note ?? org.Note;

            _context.SaveChanges();
            return org.Id;
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
