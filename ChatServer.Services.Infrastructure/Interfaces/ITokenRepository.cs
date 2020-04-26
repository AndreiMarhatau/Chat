using ChatServer.Services.Infrastructure.Models.User;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ChatServer.Services.Infrastructure.Interfaces
{
    public interface ITokenRepository
    {
        Task SaveNewToken(int id, string v);
        Task RemoveToken(string v);
        Task<User> GetUser(string v);
    }
}
