using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ChatServer.Repositories.Infrastructure.Models;
using ChatServer.Services.Infrastructure.Interfaces;
using ChatServer.Services.Infrastructure.Models.User;
using Microsoft.EntityFrameworkCore;
using User = ChatServer.Repositories.Infrastructure.Models.User;

namespace ChatServer.Repositories.UserRepository
{
    public class UserRepository : IUserRepository
    {
        private Context _context;

        public UserRepository(Context context)
        {
            this._context = context;
        }

        public async Task<Services.Infrastructure.Models.User.User> AddNewUser(Credentials credentials)
        {
            var user = new User() {Login = credentials.Login, Password = credentials.Password};
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user.ToServiceModel();
        }

        public async Task CheckCredentials(Credentials credentials)
        {
            await _context.Users.FirstAsync(user =>
                user.Login == credentials.Login && user.Password == credentials.Password);
        }

        public async Task CheckExists(string login)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user => user.Login == login);
            if (user != null)
            {
                throw new Exception();
            }
        }

        public async Task<Services.Infrastructure.Models.User.User> GetUser(int userId)
        {
            return (await _context.Users.FindAsync(userId)).ToServiceModel();
        }

        public async Task<Services.Infrastructure.Models.User.User> GetUserByLogin(string login)
        {
            return (await _context.Users.FirstAsync(user => user.Login == login)).ToServiceModel();
        }

        public async Task<List<Services.Infrastructure.Models.User.User>> GetUsers(List<int> userIds)
        {
            return (await _context.Users.Where(user => userIds.Contains(user.Id)).ToListAsync())
                .Select(user => user.ToServiceModel()).ToList();
        }

        public async Task<List<Services.Infrastructure.Models.User.User>> GetUsersByLogin(string login)
        {
            return (await _context.Users
                    .Where(user => user.Login.Contains(login))
                    .ToListAsync())
                .Select(user => user.ToServiceModel()).ToList();
        }
    }
}
