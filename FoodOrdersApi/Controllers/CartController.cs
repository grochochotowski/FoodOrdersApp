using FoodCartsApi.Services;
using FoodOrdersApi.Entities.Enum;
using FoodOrdersApi.Models.Cart;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FoodCartsApi.Controllers
{
    [Route("api/cart")]
    [ApiController]
    [Authorize]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }




        // POST api/cart/create
        [HttpPost("create")]
        public ActionResult Create([FromBody] CreateCartDto dto)
        {
            var cartId = _cartService.Create(dto);

            if (cartId == -2) return NotFound($"Restaurant with id {dto.RestaurantId} does not exist");
            if (cartId == -3) return NotFound($"Organization with id {dto.OrganizationId} does not exist");

            return Ok(new { newCartId = cartId });
        }

        // GET api/cart/all
        [HttpGet("all")]
        public ActionResult<IEnumerable<CartDto>> GetAll(
            [FromQuery] string? filters,
            [FromQuery] int page,
            [FromQuery] string? sortBy,
            [FromQuery] SortDirection sortDireciton
            )
        {
            var cartDtos = _cartService.GetAll(filters, page, sortBy, sortDireciton);
            return Ok(cartDtos);
        }

        // GET api/cart/get/5
        [HttpGet("get/{id}")]
        public ActionResult GetByID(int id)
        {
            var cartDto = _cartService.GetById(id);

            if (cartDto == null) return NotFound($"Cart with id {id} does not exist");
            return Ok(cartDto);
        }
        
        // GET api/cart/organization/5
        [HttpGet("organization/{id}")]
        public ActionResult<IEnumerable<CartFromOrganizationDto>> GetCartFromOrganization(int id)
        {
            var cartDto = _cartService.GetCartFromOrganization(id);

            return Ok(cartDto);
        }

        // PUT api/cart/update/5
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] UpdateCartDto dto)
        {
            var cartId = _cartService.Update(id, dto);

            if (cartId == -1) return NotFound($"Cart with id {id} does not exist");
            return Ok($"api/cart/get/{cartId}");
        }

        // DELETE api/cart/delete/5
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var code = _cartService.Delete(id);

            if (code == -1) return NotFound($"Cart with id {id} does not exist");
            return NoContent();
        }
    }
}
