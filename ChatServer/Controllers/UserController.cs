using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;
using ChatServer.Infrastructure.Interfaces;
using ChatServer.Infrastructure.Models.Chat;
using ChatServer.Infrastructure.Models.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChatServer.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : Controller
    {
        private IUserService _userService;

        public UserController(
            IUserService userService
            )
        {
            this._userService = userService;
        }

        [HttpGet]
        [Route("user")]
        public async Task<UserModel> GetCurrentUser()
        {
            if (HttpContext.Request.Cookies.ContainsKey("token"))
            {
                UserModel resp = await _userService.GetCurrentUserByToken(HttpContext.Request.Cookies["token"]);
                return resp;
            }
            throw new Exception();
        }

        [HttpPost]
        [Route("login")]
        public async Task<UserModel> Login(UserLogin user)
        {
            string token = await _userService.Login(user);
            HttpContext.Response.Cookies.Append("token", token);
            return await _userService.GetCurrentUserByToken(token);
        }

        [HttpPost]
        [Route("register")]
        public async Task<UserModel> Register(UserLogin user)
        {
            string token = await _userService.Register(user);
            HttpContext.Response.Cookies.Append("token", token);
            return await _userService.GetCurrentUserByToken(token);
        }

        [HttpGet]
        [Route("sign-out")]
        public async Task SignOut()
        {
            if (HttpContext.Request.Cookies.ContainsKey("token"))
            {
                await _userService.SignOut(HttpContext.Request.Cookies["token"]);
                HttpContext.Response.Cookies.Delete("token");
            }
        }

        [HttpGet]
        [Route("search-users")]
        public async Task<List<UserModel>> SearchUsers(string login)
        {
            return await _userService.GetUsersByLogin(login);
        }

        [HttpPost]
        [Route("change-password")]
        public async Task ChangePassword([FromBody]PasswordForChange passwords)
        {
            await _userService.ChangePassword(
                await _userService.GetCurrentUserByToken(HttpContext.Request.Cookies["token"]),
                passwords);
        }
    }
}