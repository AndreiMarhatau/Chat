using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatServer.Infrastructure.Interfaces;
using ChatServer.Infrastructure.Models.Chat;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChatServer.Controllers
{
    [Route("api/chat")]
    public class ChatController : ControllerBase
    {
        private IChatService _chatService;
        private IUserService _userService;

        public ChatController(
            IChatService chatService,
            IUserService userService
            )
        {
            this._chatService = chatService;
            this._userService = userService;
        }

        [HttpGet]
        [Route("history")]
        public async Task<List<Msg>> GetHistory(int id, int count = 8, int page = 1)
        {
            return await _chatService.GetHistory((await _userService.GetCurrentUserByToken(
                HttpContext.Request.Cookies["token"])).Id, id, count, page);
        }

        [HttpGet]
        [Route("conversations")]
        public async Task<List<Conversation>> GetConversations()
        {
            var currentUserId = (await _userService.GetCurrentUserByToken(
                HttpContext.Request.Cookies["token"])).Id;
            return await _chatService.GetConversations(currentUserId);
        }

        [HttpPost]
        [Route("create-conversation")]
        public async Task<List<Conversation>> CreateConversation([FromBody]CreateConversationModel model)
        {
            await _chatService.CreateConversation(model);
            return await GetConversations();
        }

        [HttpPost]
        [Route("send-msg")]
        public async Task<OutputMsg> SendMessage([FromBody]InputMsg msg)
        {
            var context = HttpContext;
            return new OutputMsg()
            {
                Id = await _chatService.SaveMessage(msg, (await _userService.GetCurrentUserByToken(
                    HttpContext.Request.Cookies["token"])).Id),
                TrackId = msg.TrackId
            };
        }
    }
}