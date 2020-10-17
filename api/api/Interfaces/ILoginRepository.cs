using api.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Interfaces
{
    public interface ILoginRepository
    {
        bool CheckIsUserLoggedIn(LoginDTO loginDTO);
    }
}
