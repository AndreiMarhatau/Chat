using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Repositories.Infrastructure.Models
{
    public class Conversation
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Name { get; set; }

        public List<ConversationUserAssociation> Associations { get; set; }
    }
}