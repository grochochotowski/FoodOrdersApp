using FoodOrdersApi.Models.Address;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/address")]
    [ApiController]
    public class AddressController : ControllerBase
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

            if (addressDto == null) return NotFound($"Address with id {id} does not exist");
            return Ok(addressDto);
        }

        // PUT api/address/update/5
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] UpdateAddressDto dto)
        {
            var addressId = _addressService.Update(id, dto);

            if (addressId == -1) return NotFound($"Address with id {id} does not exist");
            return Ok($"api/address/get/{addressId}");
        }

        // DELETE api/address/delete/5
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var code = _addressService.Delete(id);

            if (code == -1) return NotFound($"Address with id {id} does not exist");
            return NoContent();
        }
    }
}
