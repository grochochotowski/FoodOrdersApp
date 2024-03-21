using FoodCartsApi.Services;
using FoodOrdersApi.Models.Cart;
using Microsoft.AspNetCore.Mvc;

namespace FoodCartsApi.Controllers
{
    [Route("api/cart")]
    [ApiController]
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
            if (cartId == -3) return NotFound($"Address with id {dto.AddressId} does not exist");
            return Created($"api/cart/get/{cartId}", null);
        }

        // GET api/cart/all
        [HttpGet("all")]
        public ActionResult<IEnumerable<CartDto>> GetAll()
        {
            var cartDtos = _cartService.GetAll();
            return Ok(cartDtos);
        }

        // GET api/cart/get/5
        [HttpGet("get/{id}")]
        public ActionResult GetByID(int id)
        {
            var cartDto = _cartService.GetByID(id);

            if (cartDto == null) return NotFound($"Cart with id {id} does not exist");
            return Ok(cartDto);
        }

        // PUT api/cart/update/5
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] UpdateCartDto dto)
        {
            var cartId = _cartService.Update(id, dto);

            if (cartId == -1) return NotFound($"Cart with id {id} does not exist");
            if (cartId == -3) return NotFound($"Address with id {dto.AddressId} does not exist");
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
