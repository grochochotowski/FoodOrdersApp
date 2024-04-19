using FoodOrdersApi.Models.User;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }




        // POST api/user/create
        [HttpPost("create")]
        public ActionResult Create([FromBody] CreateUserDto dto)
        {
            var userId = _userService.Create(dto);

            if (userId == -1) return NotFound($"Organization with id {dto.OrganizationId} does not exist");
            return Created($"api/user/get/{userId}", null);
        }

        // GET api/user/all
        [HttpGet("all")]
        public ActionResult<IEnumerable<UserDto>> GetAll()
        {
            var userDtos = _userService.GetAll();
            return Ok(userDtos);
        }

        // DELETE api/user/delete/5
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var code = _userService.Delete(id);

            if (code == -1) return NotFound($"User with id {id} does not exist");
            return NoContent();
        }
    }
}
