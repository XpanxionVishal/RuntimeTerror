using api.DTOs;
using api.Entities;
using api.Interfaces;
using System.Linq;

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

        public UserDTO GetUserDetails(string email)
        {
            return (from user in this.apiContext.User
                    where user.Email == email
                    select new UserDTO()
                    {
                        Email = email,
                        IsBuyer = user.IsBuyer,
                        IsSeller = user.IsSeller,
                        Name = user.Name,
                        Password = null,
                        UserId = user.UserId
                    }).FirstOrDefault();
        }

        public bool RegisterUser(UserDTO userDTO)
        {
            User user = new User()
            {
                Password = userDTO.Password,
                Email = userDTO.Email,
                Name = userDTO.Name,
                IsBuyer = userDTO.IsBuyer,
                IsSeller = userDTO.IsSeller,
                UserId = 0      // User Id to be auto increemented
            };

            if (!(from u in this.apiContext.User where u.Email == userDTO.Email select u).Any())
            {
                this.apiContext.User.Add(user);
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
