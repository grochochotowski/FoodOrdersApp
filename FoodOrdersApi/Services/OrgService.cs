using AutoMapper;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models;

namespace FoodOrdersApi.Services
{
    public interface IOrgService
    {
        int Create(CreateOrgDto dto);
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


        public int Create(CreateOrgDto dto)
        {
            var org = _mapper.Map<Organization>(dto);
            _context.Organizations.Add(org);
            _context.SaveChanges();

            return org.Id;
        }
    }
}
