using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace OpinionsApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OpinionsController : ControllerBase
    {
        private static readonly List<string> Opinions = new List<string>();

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return Opinions;
        }

        [HttpPost]
        public IActionResult Post([FromBody] string opinion)
        {
            if (opinion == "pour" || opinion == "contre")
            {
                Opinions.Add(opinion);
                return Ok();
            }
            return BadRequest("Invalid opinion");
        }
    }
}