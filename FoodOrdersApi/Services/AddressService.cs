using AutoMapper;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Entities;
using FoodOrdersApi.Models.Org;
using FoodOrdersApi.Models.Address;
using System.Net;

namespace FoodOrdersApi.Services
{
    public interface IAddressService
    {
        int Create(CreateAddressDto dto);
        IEnumerable<AddressDto> GetAll();
        AddressDto GetByID(int id);
        int Update(int id, CreateAddressDto dto);
        int Delete(int id);
    }

    public class AddressService : IAddressService
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public AddressService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }



        // Create new address
        public int Create(CreateAddressDto dto)
        {
            var address = _mapper.Map<Address>(dto);
            _context.Addresses.Add(address);
            _context.SaveChanges();

            return address.Id;
        }


        // Get all address
        public IEnumerable<AddressDto> GetAll()
        {
            var addresses = _context.Addresses.ToList();
            var addressDtos = _mapper.Map<List<AddressDto>>(addresses);

            return addressDtos;
        }


        // Get address by ID
        public AddressDto GetByID(int id)
        {
            var address = _context.Addresses.FirstOrDefault(o => o.Id == id);
            if (address == null) return null;

            var addressDto = _mapper.Map<AddressDto>(address);


            return addressDto;
        }


        // Update address with id
        public int Update(int id, CreateAddressDto dto)
        {
            var address = _context.Addresses
                .FirstOrDefault(o => o.Id == id);

            if (address == null) return 0;

            address.Country = address.Country;
            address.City = address.City;
            address.Street = address.Street;
            address.Building = address.Building;
            address.Premises = address.Premises;

            _context.SaveChanges();
            return address.Id;
        }


        // Update address with id
        public int Delete(int id)
        {
            var address = _context.Addresses
                .FirstOrDefault(o => o.Id == id);

            if (address == null) return 0;

            _context.Addresses.Remove(address);
            _context.SaveChanges();
            return 1;
        }

    }
}
