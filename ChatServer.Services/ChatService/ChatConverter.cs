using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChatServer.Infrastructure.Models.Chat;
using ChatServer.Services.Infrastructure.Models.Conversation;
using ChatServer.Services.Infrastructure.Models.Message;
using Conversation = ChatServer.Infrastructure.Models.Chat.Conversation;
using CreateConversationModel = ChatServer.Infrastructure.Models.Chat.CreateConversationModel;

namespace ChatServer.Services.ChatService
{
    public static class ChatConverter
    {
        public static Msg ToApiModel(this Message message)
        {
            return new Msg()
            {
                Id = message.Id,
                Date = message.Date,
                Message = message.Text,
                OwnerId = message.Sender.Id
            };
        }

        public static Conversation ToApiModel(this Infrastructure.Models.Conversation.Conversation conv, Message lastMsg)
        {
            return new Conversation()
            {
                Id = conv.Id,
                Name = conv.Name,
                LastMsg = lastMsg?.Text
            };
        }

        public static IntermediateConversation ToIntermediateModel(this Infrastructure.Models.Conversation.Conversation conv, Message lastMsg)
        {
            return new IntermediateConversation()
            {
                Id = conv.Id,
                Name = conv.Name,
                LastMsg = lastMsg,
                CreatedAt = conv.CreatedAt
            };
        }
        public static Conversation ToApiModel(this Infrastructure.Models.Conversation.IntermediateConversation conv)
        {
            return new Conversation()
            {
                Id = conv.Id,
                Name = conv.Name,
                LastMsg = conv.LastMsg?.Text
            };
        }

        public static Infrastructure.Models.Conversation.Conversation ToServiceModel(this CreateConversationModel conv)
        {
            return new Infrastructure.Models.Conversation.Conversation
            {
                Name = conv.Name,
                UserIds = conv.UserIds,
                CreatedAt = DateTime.UtcNow
            };
        }

        public static MsgToSave ToServiceModel(this InputMsg msg, int userId)
        {
            return new MsgToSave()
            {
                ConversationId = msg.ConversationId,
                Text = msg.Text,
                UserId = userId,
                Date = DateTime.UtcNow
            };
        }
    }
}
