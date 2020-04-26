using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Services.Infrastructure.Models.Message
{
    public class MsgToSave
    {
        public string Text { get; set; }
        public int UserId { get; set; }
        public int ConversationId { get; set; }
        public DateTime Date { get; set; }
    }
}
