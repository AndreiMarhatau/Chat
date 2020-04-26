using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChatServer.Services.Infrastructure.Models.Conversation;

namespace ChatServer.Repositories.ConversationRepository
{
    public static class ConversationConverter
    {
        public static Conversation ToServiceModel(this Infrastructure.Models.Conversation conversation)
        {
            return new Conversation()
            {
                Id = conversation.Id,
                UserIds = conversation.Associations.Select(ass => ass.UserId).ToList(),
                Name = conversation.Name,
                CreatedAt = conversation.CreatedAt
            };
        }

        public static Infrastructure.Models.Conversation ToRepoModel(this Conversation conv)
        {
            return new Infrastructure.Models.Conversation()
            {
                Id =  conv.Id,
                Name = conv.Name,
                CreatedAt = conv.CreatedAt
            };
        }
    }
}
