using System;
using System.Collections.Generic;
using System.Text;
using ChatServer.Services.Infrastructure.Models.User;

namespace ChatServer.Repositories.UserRepository
{
    public static class UserConverter
    {
        public static User ToServiceModel(this Infrastructure.Models.User user)
        {
            return new User()
            {
                Id = user.Id,
                Login = user.Login
            };
        }
    }
}
