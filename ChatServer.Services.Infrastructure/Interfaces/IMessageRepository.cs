using ChatServer.Services.Infrastructure.Models.Message;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ChatServer.Services.Infrastructure.Interfaces
{
    public interface IMessageRepository
    {
        Task<List<Message>> GetHistory(int id, int count, int page);
        Task<int> SaveMessage(MsgToSave msgToSave);
        Task<Message> GetLastMsg(int id);
    }
}
