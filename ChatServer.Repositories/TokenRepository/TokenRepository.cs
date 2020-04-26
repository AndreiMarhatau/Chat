using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ChatServer.Repositories.Infrastructure.Models;
using ChatServer.Repositories.UserRepository;
using ChatServer.Services.Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ChatServer.Repositories.TokenRepository
{
    public class TokenRepository : ITokenRepository
    {
        private Context _context;

        public TokenRepository(Context context)
        {
            this._context = context;
        }

        public async Task<Services.Infrastructure.Models.User.User> GetUser(string v)
        {
            var user = (await _context.Tokens
                .Where(token => token.Value == v)
                .Include(token => token.User)
                .FirstAsync()).User;
            return user.ToServiceModel();
        }

        public async Task RemoveToken(string v)
        {
            _context.Tokens.Remove(await _context.Tokens
                .Where(token => token.Value == v)
                .Include(token => token.User)
                .FirstAsync());
            await _context.SaveChangesAsync();
        }

        public async Task SaveNewToken(int id, string v)
        {
            _context.Tokens.Add(new Token() {UserId = id, Value = v});
            await _context.SaveChangesAsync();
        }
    }
}
