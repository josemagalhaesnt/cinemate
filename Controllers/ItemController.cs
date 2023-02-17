using Cinemate.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Cinemate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAllMovies()
        {
            var movies = new List<Item>
            {
                new Item { Id = 1, Title = "White Chicks", ReleaseDate = new DateTimeOffset(new DateTime(2004, 08, 27)), OriginalTitle = "White Chicks", PosterUrl = "" }
            };
        }
    }
}
