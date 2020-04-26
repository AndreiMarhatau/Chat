using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Repositories.Infrastructure.Models
{
    public class ConversationUserAssociation
    {
        public int Id { get; set; }
        public int ConversationId { get; set; }
        public int UserId { get; set; }
    }
}
