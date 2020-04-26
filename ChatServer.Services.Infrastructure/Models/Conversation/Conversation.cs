using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Services.Infrastructure.Models.Conversation
{
    public class Conversation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<int> UserIds { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
