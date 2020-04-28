using ChatServer.Infrastructure.Interfaces;
using ChatServer.Infrastructure.Models.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ChatServer.Infrastructure.Models.Chat;
using ChatServer.Services.Infrastructure.Interfaces;
using ChatServer.Services.Infrastructure.Models.User;

namespace ChatServer.Services.UserService
{
    public class UserService : IUserService
    {
        private IUserRepository _userRepository;
        private ITokenRepository _tokenRepository;

        public UserService(
            IUserRepository userRepository,
            ITokenRepository tokenRepository
            )
        {
            this._userRepository = userRepository;
            this._tokenRepository = tokenRepository;
        }

        public async Task ChangePassword(UserModel userModel, PasswordForChange passwords)
        {
            UserWithPassword user = await _userRepository.GetUserWithPassword(userModel.Id);

            if (user.Password == passwords.OldPassword)
            {
                await _userRepository.UpdatePassword(user.Id, passwords.NewPassword);
            }
            else
            {
                throw new Exception();
            }
        }

        public async Task<UserModel> GetCurrentUserByToken(string v)
        {
            User user = await _tokenRepository.GetUser(v);
            return user.ToApiModel();
        }

        public async Task<List<UserModel>> GetUsersByLogin(string login)
        {
            return (await _userRepository.GetUsersByLogin(login)).Select(user => user.ToApiModel()).ToList();
        }

        public async Task<string> Login(UserLogin user)
        {
            User userByLogin = await _userRepository.GetUserByLogin(user.Login);
            await _userRepository.CheckCredentials(user.ToServiceModel());
            string token = GenerateToken();
            await _tokenRepository.SaveNewToken(userByLogin.Id, token);
            return token;
        }

        public async Task<string> Register(UserLogin user)
        {
            await _userRepository.CheckExists(user.Login);
            User newUser = await _userRepository.AddNewUser(user.ToServiceModel());
            string token = GenerateToken();
            await _tokenRepository.SaveNewToken(newUser.Id, token);
            return token;
        }

        public async Task SignOut(string v)
        {
            await _tokenRepository.RemoveToken(v);
        }

        private string GenerateToken()
        {
            byte[] bytes = new byte[128];
            new Random().NextBytes(bytes);
            return Encoding.ASCII.GetString(bytes);
        }
    }
}
