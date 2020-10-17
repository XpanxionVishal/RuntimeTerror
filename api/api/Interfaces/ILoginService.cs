using api.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Interfaces
{
    public interface ILoginService
    {
        bool CheckIsUserLoggedIn(LoginDTO loginDTO);
    }
}
