using ChatServer.Services.Infrastructure.Models.Conversation;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ChatServer.Services.Infrastructure.Interfaces
{
    public interface IConversationRepository
    {
        Task<Conversation> GetConversation(int id2);
        Task<List<Conversation>> GetConversationsByUserId(int id);
        Task CreateConversation(Conversation conversation);
    }
}
