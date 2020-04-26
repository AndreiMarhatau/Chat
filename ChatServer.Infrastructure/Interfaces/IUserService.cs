using ChatServer.Infrastructure.Models.User;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ChatServer.Infrastructure.Models.Chat;

namespace ChatServer.Infrastructure.Interfaces
{
    public interface IUserService
    {
        Task<UserModel> GetCurrentUserByToken(string v);
        Task<string> Login(UserLogin user);
        Task<string> Register(UserLogin user);
        Task SignOut(string v);
        Task<List<UserModel>> GetUsersByLogin(string login);
    }
}
