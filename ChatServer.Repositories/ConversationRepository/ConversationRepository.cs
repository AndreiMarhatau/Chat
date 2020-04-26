using ChatServer.Services.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ChatServer.Repositories.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Conversation = ChatServer.Services.Infrastructure.Models.Conversation.Conversation;

namespace ChatServer.Repositories.ConversationRepository
{
    public class ConversationRepository : IConversationRepository
    {
        private Context _context;

        public ConversationRepository(Context context)
        {
            this._context = context;
        }

        public async Task CreateConversation(Conversation conversation)
        {
            var inputConv = conversation.ToRepoModel();
            var foundConv = (await _context.Conversations
                    .Include(conv => conv.Associations)
                    .Where(conv =>
                        conv.Name == inputConv.Name)
                    .ToListAsync())
                .FirstOrDefault(conv => conv.Associations.Select(ass => ass.UserId).SequenceEqual(conversation.UserIds));
            if (foundConv != null)
            {
                return;
            }

            var outModel = _context.Conversations.Add(conversation.ToRepoModel()); 
            await _context.SaveChangesAsync();
            var conv = outModel.Entity;
            _context.ConversationUserAssociations.AddRange(conversation.UserIds.Select(u =>
                new ConversationUserAssociation() {ConversationId = conv.Id, UserId = u}));
            await _context.SaveChangesAsync();
        }

        public async Task<Conversation> GetConversation(int id2)
        {
            var conversation = await _context.Conversations
                .Where(conv => conv.Id == id2)
                .Include(conv => conv.Associations)
                .FirstAsync();
            return conversation.ToServiceModel();
        }

        public async Task<List<Conversation>> GetConversationsByUserId(int id)
        {
            var convs = (await _context.Conversations
                    .Include(conv => conv.Associations)
                    .Where(conv => conv.Associations.Select(ass => ass.UserId).Contains(id)).ToListAsync())
                .Select(conv => conv.ToServiceModel()).ToList();
            return convs;
        }
    }
}
