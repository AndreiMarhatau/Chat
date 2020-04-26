using ChatServer.Infrastructure.Models.Chat;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ChatServer.Infrastructure.Interfaces
{
    public interface IChatService
    {
        Task<List<Msg>> GetHistory(int id1, int id2, int count, int page);
        Task<List<Conversation>> GetConversations(int id);
        Task CreateConversation(CreateConversationModel model);
        Task<int> SaveMessage(InputMsg msg, int id);
    }
}
