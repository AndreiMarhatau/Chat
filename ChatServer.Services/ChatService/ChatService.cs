using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ChatServer.Infrastructure.Interfaces;
using ChatServer.Infrastructure.Models.Chat;
using ChatServer.Services.Infrastructure.Interfaces;
using ChatServer.Services.Infrastructure.Models.Conversation;
using ChatServer.Services.Infrastructure.Models.Message;
using ChatServer.Services.Infrastructure.Models.User;
using ChatServer.Services.UserService;
using Conversation = ChatServer.Services.Infrastructure.Models.Conversation.Conversation;
using CreateConversationModel = ChatServer.Infrastructure.Models.Chat.CreateConversationModel;

namespace ChatServer.Services.ChatService
{
    public class ChatService : IChatService
    {
        private IConversationRepository _conversationRepository;
        private IMessageRepository _messageRepository;

        public ChatService(
            IConversationRepository conversationRepository,
            IMessageRepository messageRepository
            )
        {
            this._conversationRepository = conversationRepository;
            this._messageRepository = messageRepository;
        }

        public async Task CreateConversation(CreateConversationModel model)
        {
            await _conversationRepository.CreateConversation(model.ToServiceModel());
        }

        public async Task<List<ChatServer.Infrastructure.Models.Chat.Conversation>> GetConversations(int id)
        {
            var convs = await _conversationRepository.GetConversationsByUserId(id);

            var apiConvs = convs
                .Select(async conv => conv.ToIntermediateModel(await _messageRepository.GetLastMsg(conv.Id)))
                .Select(conv => conv.Result)
                .OrderByDescending(conv => conv.LastMsg?.Date ?? conv.CreatedAt)
                .Select(conv => conv.ToApiModel());

            return apiConvs.ToList();
        }

        public async Task<List<Msg>> GetHistory(int id1, int id2, int count, int page)
        {
            Conversation conv = await _conversationRepository.GetConversation(id2);
            if (conv.UserIds.Contains(id1))
            {
                List<Message> messages = await _messageRepository.GetHistory(conv.Id, count, page);
                return messages.Select(msg => msg.ToApiModel()).ToList();
            }
            throw new Exception();
        }

        public async Task<int> SaveMessage(InputMsg msg, int id)
        {
            return await _messageRepository.SaveMessage(msg.ToServiceModel(id));
        }
    }
}
