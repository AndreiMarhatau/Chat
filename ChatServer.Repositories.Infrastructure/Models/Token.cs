using System;
using System.Collections.Generic;
using System.Text;

namespace ChatServer.Repositories.Infrastructure.Models
{
    public class Token
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Value { get; set; }

        public User User { get; set; }
    }
}
