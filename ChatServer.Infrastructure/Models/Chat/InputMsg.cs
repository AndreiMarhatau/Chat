using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Infrastructure.Models.Chat
{
    public class InputMsg
    {
        public int TrackId { get; set; }
        public string Text { get; set; }
        public int ConversationId { get; set; }
    }
}
