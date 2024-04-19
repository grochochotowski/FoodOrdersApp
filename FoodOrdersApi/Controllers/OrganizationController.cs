using FoodOrdersApi.Entities.Enum;
using FoodOrdersApi.Models.Organization;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/organization")]
    [ApiController]
    public class OrganizationController : ControllerBase
    {
        private readonly IOrgService _orgService;

        public OrganizationController(IOrgService orgService)
        {
            _orgService = orgService;
        }




        // POST api/org/create
        [HttpPost("create")]
        public ActionResult Create([FromBody] CreateOrganizationDto dto)
        {
            var orgId = _orgService.Create(dto);

            return Created($"api/org/get/{orgId}", null);
        }

        // GET api/org/all
        [HttpGet("all")]
        public ActionResult<IEnumerable<OrganizationListDto>> GetAll(
            [FromQuery] int page
            )
        {
            var orgDtos = _orgService.GetAll(page);
            return Ok(orgDtos);
        }

        // DELETE api/org/delete/5
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var code = _orgService.Delete(id);

            if (code == -1) return NotFound($"Organization with id {id} does not exist");
            return NoContent();
        }
    }
}
