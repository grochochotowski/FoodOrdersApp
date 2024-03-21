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

        // GET api/user/get/5
        [HttpGet("get/{id}")]
        public ActionResult GetByID(int id)
        {
            var userDto = _userService.GetByID(id);

            if (userDto == null) return NotFound($"User with id {id} does not exist");
            return Ok(userDto);
        }

        // PUT api/user/update/5
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] UpdateUserDto dto)
        {
            var userId = _userService.Update(id, dto);

            if (userId == -1) return NotFound($"User with id {id} does not exist");
            if (userId == -2) return NotFound($"Organization with id {dto.OrganizationId} does not exist");
            return Ok($"api/user/get/{userId}");
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
