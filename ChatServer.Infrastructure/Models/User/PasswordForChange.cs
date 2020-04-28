using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Infrastructure.Models.User
{
    public class PasswordForChange
    {
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
    }
}
