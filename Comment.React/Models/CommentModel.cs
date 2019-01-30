using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Comment.React.Models
{
    public class CommentModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string DateFormatted { get; set; }
        public string Content { get; set; }
        public int Like { get; set; }
        public string Image { get; set; }
        public string ParentId { get; set; }
    }
}
