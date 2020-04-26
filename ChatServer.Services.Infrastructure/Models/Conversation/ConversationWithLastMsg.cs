using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Services.Infrastructure.Models.Conversation
{
    public class ConversationWithLastMsg
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<int> UserIds { get; set; }
        public Message.Message LastMsg { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
