using FoodOrdersApi.Models;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/meal")]
    [ApiController]
    public class MealController : ControllerBase
    {
        private readonly IMealService _mealService;

        public MealController(IMealService mealService)
        {
            _mealService = mealService;
        }




        // POST api/meal/create
        [HttpPost("create")]
        public ActionResult Create([FromBody] CreateMealDto dto)
        {
            var mealId = _mealService.Create(dto);
            return Created($"api/meal/get/{mealId}", null);
        }

        // GET api/meal/all
        [HttpGet("all")]
        public ActionResult<IEnumerable<MealDto>> GetAll()
        {
            var mealDtos = _mealService.GetAll();
            return Ok(mealDtos);
        }

        // GET api/meal/get/5
        [HttpGet("getById/{id}")]
        public ActionResult GetByID(int id)
        {
            var mealDto = _mealService.GetByID(id);
            if (mealDto == null) return NotFound();
            return Ok(mealDto);
        }

        // PUT api/meal/update/5
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] CreateMealDto dto)
        {
            var mealId = _mealService.Update(id, dto);
            if (mealId == 0) return NotFound();
            return Ok($"api/meal/get/{mealId}");
        }

        // DELETE api/meal/delete/5
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var code = _mealService.Delete(id);

            if (code == 0) return NotFound();
            return NoContent();
        }
    }
}
