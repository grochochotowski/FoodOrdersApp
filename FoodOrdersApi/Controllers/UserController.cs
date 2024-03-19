using FoodOrdersApi.Models.Address;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FoodOrdersApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IAddressService _addressService;

        public AddressController(IAddressService addressService)
        {
            _addressService = addressService;
        }




        // POST api/address/create
        [HttpPost("create")]
        public ActionResult Create([FromBody] CreateAddressDto dto)
        {
            var addressId = _addressService.Create(dto);
            return Created($"api/address/get/{addressId}", null);
        }

        // GET api/address/all
        [HttpGet("all")]
        public ActionResult<IEnumerable<AddressDto>> GetAll()
        {
            var addressDtos = _addressService.GetAll();
            return Ok(addressDtos);
        }

        // GET api/address/get/5
        [HttpGet("getById/{id}")]
        public ActionResult GetByID(int id)
        {
            var addressDto = _addressService.GetByID(id);
            if (addressDto == null) return NotFound();
            return Ok(addressDto);
        }

        // PUT api/address/update/5
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] CreateAddressDto dto)
        {
            var addressId = _addressService.Update(id, dto);
            if (addressId == 0) return NotFound();
            return Ok($"api/address/get/{addressId}");
        }

        // DELETE api/address/delete/5
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var code = _addressService.Delete(id);

            if (code == 0) return NotFound();
            return NoContent();
        }
    }
}
