using FoodOrdersApi.Entities.Enum;
using FoodOrdersApi.Models.User;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

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
        
        // POST api/user/all
        [HttpGet("all")]
        public ActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }

        // GET api/user/list
        [HttpGet("list")]
        public ActionResult<IEnumerable<UserListDto>> GetAllList(
            [FromQuery] int page,
            [FromQuery] string? sortBy,
            [FromQuery] SortDirection sortDireciton
            )
        {
            var userDtos = _userService.GetAllList(page, sortBy, sortDireciton);
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
