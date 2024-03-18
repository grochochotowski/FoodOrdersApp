using FoodOrdersApi.Models;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/org")]
    [ApiController]
    public class OrgControllerOLD : ControllerBase
    {
        private readonly IOrgService _orgService;

        public OrgControllerOLD(IOrgService orgService)
        {
            _orgService = orgService;
        }


        [HttpPost("create")]
        public ActionResult Create([FromBody] CreateOrgDto dto)
        {
            var orgId = _orgService.Create(dto);
            return Created($"{orgId}", null);
        }
    }
}
