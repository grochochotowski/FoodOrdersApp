﻿using FoodOrdersApi.Models;
using FoodOrdersApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrdersApi.Controllers
{
    [Route("api/org")]
    [ApiController]
    public class OrgController : ControllerBase
    {
        private readonly IOrgService _orgService;

        public OrgController(IOrgService orgService)
        {
            _orgService = orgService;
        }



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
        public ActionResult Create([FromBody] CreateOrgDto dto)
        {
            var orgId = _orgService.Create(dto);
            return Created($"{orgId}", null);
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
