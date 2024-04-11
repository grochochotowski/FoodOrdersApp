using FoodOrdersApi.Models.Organization;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/org")]
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
        public ActionResult<IEnumerable<OrganizationListDto>> GetAll()
        {
            var orgDtos = _orgService.GetAll();
            return Ok(orgDtos);
        }

        // GET api/org/get/5
        [HttpGet("get/{id}")]
        public ActionResult GetByID(int id)
        {
            var orgDto = _orgService.GetByID(id);

            if (orgDto == null) return NotFound($"Organization with id {id} does not exist");
            return Ok(orgDto);
        }

        // PUT api/org/update/5
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] UpdateOrganizationDto dto)
        {
            var orgId = _orgService.Update(id, dto);

            if (orgId == -1) return NotFound($"Organization with id {id} does not exist");
            return Ok($"api/org/get/{orgId}");
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
