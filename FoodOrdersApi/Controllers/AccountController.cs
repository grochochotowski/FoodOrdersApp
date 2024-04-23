using FoodOrdersApi.Models.Account;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;

namespace FoodOrdersApi.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }


        [HttpPost("register")]
        public ActionResult Register([FromBody] RegisterDto dto)
        {
            if (dto.Password != dto.ConfirmPassword)
            {
                return BadRequest("Passwords do not match");
            }

            _accountService.Register(dto);

            return Ok();
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginDto dto)
        {
            string token = _accountService.GenerateToken(dto);

            return Ok(token);
        }

    }
}
