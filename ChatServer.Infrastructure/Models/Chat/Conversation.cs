using ChatServer.Services.Infrastructure.Models.Message;
using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Infrastructure.Models.Chat
{
    public class Conversation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastMsg { get; set; }
    }
}
