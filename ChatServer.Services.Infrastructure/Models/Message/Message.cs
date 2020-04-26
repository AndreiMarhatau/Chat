using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Services.Infrastructure.Models.Message
{
    public class Message
    {
        public int Id { get; set; }
        public Conversation.Conversation Conversation { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public User.User Sender { get; set; }
    }
}
