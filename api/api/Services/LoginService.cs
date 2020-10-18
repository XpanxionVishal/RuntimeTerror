using api.DTOs;
using api.Interfaces;

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

        public UserDTO GetUserDetails(string email)
        {
            return this.loginRepository.GetUserDetails(email);
        }

        public bool RegisterUser(UserDTO userDTO)
        {
            return this.loginRepository.RegisterUser(userDTO);
        }
    }
}
