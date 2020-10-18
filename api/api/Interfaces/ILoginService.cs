using api.DTOs;

namespace api.Interfaces
{
    public interface ILoginService
    {
        bool CheckIsUserLoggedIn(LoginDTO loginDTO);
        UserDTO GetUserDetails(string email);
        bool RegisterUser(UserDTO userDTO);
    }
}
