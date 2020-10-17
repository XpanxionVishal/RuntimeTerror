using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/Login")]
    public class LoginController
    {
        private readonly ILoginService loginService;

        public LoginController(ILoginService loginService)
        {
            this.loginService = loginService;
        }

        [HttpPost, Route("CheckIsUserLoggedIn")]
        public bool CheckIsUserLoggedIn([FromBody] LoginDTO loginDTO)
        {
            return this.loginService.CheckIsUserLoggedIn(loginDTO);
        }
    }
}
