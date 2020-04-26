using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Infrastructure.Models.Chat
{
    public class CreateConversationModel
    {
        public string Name { get; set; }
        public List<int> UserIds { get; set; }
    }
}
