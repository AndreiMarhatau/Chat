using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChatServer.Infrastructure.Models.User
{
    public class UserLogin
    {
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
