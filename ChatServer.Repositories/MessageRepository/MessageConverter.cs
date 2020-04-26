using System;
using System.Collections.Generic;
using System.Text;
using ChatServer.Repositories.ConversationRepository;
using ChatServer.Repositories.UserRepository;
using ChatServer.Services.Infrastructure.Models.Message;

namespace ChatServer.Repositories.MessageRepository
{
    public static class MessageConverter
    {
        public static Message ToServiceModel(this Infrastructure.Models.Message msg)
        {
            return new Message()
            {
                Id = msg.Id,
                Date = msg.Date,
                Conversation = msg.Conversation.ToServiceModel(),
                Sender = msg.User.ToServiceModel(),
                Text = msg.Text
            };
        }

        public static Infrastructure.Models.Message ToRepoModel(this MsgToSave msg)
        {
            return new Infrastructure.Models.Message()
            {
                UserId = msg.UserId,
                ConversationId = msg.ConversationId,
                Text = msg.Text,
                Date = msg.Date
            };
        }
    }
}
