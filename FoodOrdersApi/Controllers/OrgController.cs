using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/org")]
    [ApiController]
    public class OrgController : ControllerBase
    {
        // GET: api/org/all
        [HttpGet("all")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/org/get/5
        [HttpGet("get/{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/org/create
        [HttpPost("create")]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/org/update/5
        [HttpPut("update/{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/org/delete/5
        [HttpDelete("delete/{id}")]
        public void Delete(int id)
        {
        }
    }
}
