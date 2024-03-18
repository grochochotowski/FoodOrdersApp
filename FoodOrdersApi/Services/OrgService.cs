using AutoMapper;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models;

namespace FoodOrdersApi.Services
{
    public interface IOrgService
    {
        int Create(CreateOrgDto dto);
        IEnumerable<Org> GetAll();
        OrgDto GetByID(int id);
    }

    public class OrgService : IOrgService
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public OrgService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }



        // Create new organization
        public int Create(CreateOrgDto dto)
        {
            var org = _mapper.Map<Org>(dto);
            _context.Organizations.Add(org);
            _context.SaveChanges();

            return org.Id;
        }


        // Get all organizations
        public IEnumerable<OrgDto> GetAll()
        {
            var orgs = _context.Organizations.ToList();
            var orgDtos = _mapper.Map<List<OrgDto>>(orgs);

            return orgDtos;
        }


        // Get organization by ID
        public OrgDto GetByID(int id)
        {
            var org = _context.Organizations.FirstOrDefault(o => o.Id == id);
            var orgDto = _mapper.Map<OrgDto>(org);

            return orgDto;
        }


        // Update organization with id
        public OrgDto Update(int id, CreateOrgDto dto)
        {
            var org =
            

            return org.Id;
        }
    }
}
