using FoodOrdersApi.Models;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserControllerOLD : ControllerBase
    {
        private readonly IUserService _userService;

        public UserControllerOLD(IUserService userService)
        {
            _userService = userService;
        }


        [HttpPost("create")]
        public ActionResult Create([FromBody] CreateUserDto dto)
        {
            var userId = _userService.Create(dto);
            return Created($"{userId}", null);
        }
    }
}
