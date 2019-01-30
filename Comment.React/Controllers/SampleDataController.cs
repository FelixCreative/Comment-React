using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Comment.React.Models;
using Microsoft.AspNetCore.Mvc;

namespace Comment.React.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static List<CommentModel> Comments = new List<CommentModel>
        {
            new CommentModel
            {
                Id=1,
                UserName = "Felix",
                Image= "https://res.cloudinary.com/practicaldev/image/fetch/s--k7nwx6xB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/38113/744613fe-afc1-483f-9d21-89c96389b47d.png",
                Content = "I really like your projects. I'm also learning ReactJS, so far I've created a calculator, a calendar generator (any year as the input), a clock, and a simple real time codifier. By the way, I use a free hosting service called Surge for a quick show of total front-end projects, you can install it with npm.",
                Like = 1,
                DateFormatted = DateTime.Now.ToString("d"),
            },
            new CommentModel
            {
                Id=2,
                UserName = "Test",
                Image= "https://res.cloudinary.com/practicaldev/image/fetch/s--Dbb90D8v--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/117805/c4456dfe-2fcd-47c9-b8ba-5067c9fccd9d.jpg",
                Content = "I really like your projects. I'm also learning ReactJS, so far I've created a calculator, a calendar generator (any year as the input), a clock, and a simple real time codifier. By the way, I use a free hosting service called Surge for a quick show of total front-end projects, you can install it with npm.",
                Like = 1,
                DateFormatted = DateTime.Now.ToString("d"),
            },
        };

        [HttpGet]
        [Route("getAllComments")]
        public IEnumerable<CommentModel> GetAllComments()
        {
            return Comments;
        }
    }
}
