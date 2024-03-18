using FoodOrdersApi.Models;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/org")]
    [ApiController]
    public class OrgControllerOLD : ControllerBase
    {
        


        [HttpPost("create")]
        public ActionResult Create([FromBody] CreateOrgDto dto)
        {
            var orgId = _orgService.Create(dto);
            return Created($"{orgId}", null);
        }
    }
}
