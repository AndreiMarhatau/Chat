using ChatServer.Services.Infrastructure.Models.User;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ChatServer.Services.Infrastructure.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetUser(int userId);
        Task<User> GetUserByLogin(string login);
        Task CheckCredentials(Credentials credentials);
        Task CheckExists(string login);
        Task<User> AddNewUser(Credentials credentials);
        Task<List<User>> GetUsers(List<int> userIds);
        Task<List<User>> GetUsersByLogin(string login);
        Task<UserWithPassword> GetUserWithPassword(int id);
        Task UpdatePassword(int id, string newPassword);
    }
}
