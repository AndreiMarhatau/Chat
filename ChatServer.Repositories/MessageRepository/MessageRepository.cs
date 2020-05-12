using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ChatServer.Repositories.Infrastructure.Models;
using ChatServer.Services.Infrastructure.Interfaces;
using ChatServer.Services.Infrastructure.Models.Message;
using Microsoft.EntityFrameworkCore;
using Message = ChatServer.Services.Infrastructure.Models.Message.Message;

namespace ChatServer.Repositories.MessageRepository
{
    public class MessageRepository : IMessageRepository
    {
        private Context _context;

        public MessageRepository(Context context)
        {
            this._context = context;
        }
        public async Task<List<Message>> GetHistory(int id, int count, int page)
        {
            var msgs = await _context.Messages.Where(msg => msg.ConversationId == id)
                .Include(msg => msg.Conversation)
                .Include(msg => msg.User)
                .OrderByDescending(msg => msg.Date)
                .Skip((page - 1) * count)
                .Take(count)
                .ToListAsync();
            var serviceMsgs = msgs
                .Select(msg => msg.ToServiceModel());
            return serviceMsgs.ToList();
        }

        public async Task<Message> GetLastMsg(int id)
        {
            var msg = await _context.Messages
                .Where(msg => msg.ConversationId == id)
                .Include(msg => msg.User)
                .Include(msg => msg.Conversation)
                .OrderByDescending(msg => msg.Date)
                .Take(1)
                .SingleOrDefaultAsync();
            return msg?.ToServiceModel();
        }

        public async Task<int> SaveMessage(MsgToSave msgToSave)
        {
            var entity = _context.Messages.Add(msgToSave.ToRepoModel());
            await _context.SaveChangesAsync();
            return entity.Entity.Id;
        }
    }
}
