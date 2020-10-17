using api.DTOs;
using api.Entities;
using api.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Repos
{
    public class LoginRepository : ILoginRepository
    {
        private readonly APIDBContext apiContext;

        public LoginRepository(APIDBContext apiContext)
        {
            this.apiContext = apiContext;
        }

        public bool CheckIsUserLoggedIn(LoginDTO loginDTO)
        {
            if ((from l in this.apiContext.User where l.Email == loginDTO.Email && l.Password == loginDTO.Password select l).Any())
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
