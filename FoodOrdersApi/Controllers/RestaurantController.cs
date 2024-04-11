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
        public ActionResult<IEnumerable<RestaurantListDto>> GetAll()
        {
            var restaurantDtos = _restaurantService.GetAll();
            return Ok(restaurantDtos);
        }

        // GET api/restaurant/get/5
        [HttpGet("get/{id}")]
        public ActionResult GetByID(int id)
        {
            var restaurantDto = _restaurantService.GetByID(id);

            if (restaurantDto == null) return NotFound($"Retaurant with id {id} does not exist");
            return Ok(restaurantDto);
        }

        // PUT api/restaurant/update/5
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] UpdateRestaurantDto dto)
        {
            var restaurantId = _restaurantService.Update(id, dto);

            if (restaurantId == -1) return NotFound($"Retaurant with id {id} does not exist");
            return Ok($"api/restaurant/get/{restaurantId}");
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
