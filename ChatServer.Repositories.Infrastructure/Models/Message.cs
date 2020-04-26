using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Repositories.Infrastructure.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public int ConversationId { get; set; }
        public int UserId { get; set; }

        public User User { get; set; }
        public Conversation Conversation { get; set; }
    }
}
