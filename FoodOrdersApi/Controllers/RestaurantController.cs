using FoodOrdersApi.Entities.Enum;
using FoodOrdersApi.Models.Restaurant;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/restaurant")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {
        private readonly IRestaurantService _restaurantService;

        public RestaurantController(IRestaurantService restaurantService)
        {
            _restaurantService = restaurantService;
        }



        // POST api/restaurant/create
        [HttpPost("create")]
        public ActionResult Create([FromBody] CreateRestaurantDto dto)
        {
            var restaurantId = _restaurantService.Create(dto);
            return Created($"api/restaurant/get/{restaurantId}", null);
        }

        // GET api/restaurant/all
        [HttpGet("all")]
        public ActionResult<IEnumerable<RestaurantListDto>> GetAll(
            [FromQuery] int page,
            [FromQuery] string? sortBy,
            [FromQuery] SortDirection sortDireciton
            )
        {
            var restaurantDtos = _restaurantService.GetAll(page, sortBy, sortDireciton);
            return Ok(restaurantDtos);
        }

        // DELETE api/restaurant/delete/5
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var code = _restaurantService.Delete(id);

            if (code == -1) return NotFound($"Retaurant with id {id} does not exist");
            return NoContent();
        }
    }
}
