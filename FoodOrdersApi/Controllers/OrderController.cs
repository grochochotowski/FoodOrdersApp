using FoodOrdersApi.Models.Order;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/order")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }




        // POST api/order/create
        [HttpPost("create")]
        public ActionResult Create([FromBody] CreateOrderDto dto)
        {
            var orderId = _orderService.Create(dto);

            if (orderId == -2) return NotFound($"User with id {dto.UserId} does not exist");
            if (orderId == -3) return NotFound($"Cart with id {dto.CartId} does not exist");
            return Created($"api/order/get/{orderId}", null);
        }

        // GET api/order/all
        [HttpGet("all")]
        public ActionResult<IEnumerable<OrderDto>> GetAll()
        {
            var orderDtos = _orderService.GetAll();
            return Ok(orderDtos);
        }

        // GET api/order/get/5
        [HttpGet("get/{id}")]
        public ActionResult GetByID(int id)
        {
            var orderDto = _orderService.GetByID(id);

            if (orderDto == null) return NotFound($"Order with id {id} does not exist");
            return Ok(orderDto);
        }

        // PUT api/order/update/5
        [HttpPut("update/{id}")]
        public ActionResult Update(int id, [FromBody] UpdateOrderDto dto)
        {
            var orderId = _orderService.Update(id, dto);

            if (orderId == -1) return NotFound($"Order with id {id} does not exist");
            return Ok($"api/order/get/{orderId}");
        }

        // DELETE api/order/delete/5
        [HttpDelete("delete/{id}")]
        public ActionResult Delete(int id)
        {
            var code = _orderService.Delete(id);

            if (code == -1) return NotFound($"Order with id {id} does not exist");
            return NoContent();
        }



        // PUT api/order/addMeal/5
        [HttpPut("addMeal/{id}")]
        public ActionResult AddMeal(int id, [FromBody] AddOrderMeal dto)
        {
            var code = _orderService.AddMeal(id, dto);

            if (code == -1) return NotFound($"Order with id {id} does not exist");
            if (code == -2) return NotFound($"One of meals does not exist - rest added");
            return NoContent();
        }
    }
}
