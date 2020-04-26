using System;
using System.Collections.Generic;
using System.Text;
using ChatServer.Infrastructure.Models.Chat;
using ChatServer.Infrastructure.Models.User;
using ChatServer.Services.Infrastructure.Models.User;

namespace ChatServer.Services.UserService
{
    public static class UserConverter
    {
        public static UserModel ToApiModel(this User user)
        {
            return new UserModel()
            {
                Id = user.Id,
                Login = user.Login
            };
        }

        public static Credentials ToServiceModel(this UserLogin user)
        {
            return new Credentials()
            {
                Login = user.Login,
                Password = user.Password
            };
        }
    }
}
