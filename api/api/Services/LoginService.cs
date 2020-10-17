﻿using api.DTOs;
using api.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Services
{
    public class LoginService : ILoginService
    {
        private readonly ILoginRepository loginRepository;

        public LoginService(ILoginRepository loginRepository)
        {
            this.loginRepository = loginRepository;
        }
        public bool CheckIsUserLoggedIn(LoginDTO loginDTO)
        {
            return this.loginRepository.CheckIsUserLoggedIn(loginDTO);
        }
    }
}
