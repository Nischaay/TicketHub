using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using SP18.PF.Core.Features.Users;
using SP18.PF.Core.Features.Venues;
using SP18.PF.G09.Xamarin.Models;
using SP18.PF.G09.Xamarin.RestApi;
using SP18.PF.G09.Xamarin.ServiceHandler;

namespace SP18.PF.G09.Xamarin.ServiceHandler
{
    public class LoginService
    {
        private readonly IRestClient _restClient;

        public LoginService()
        {
            _restClient = new RestClient();
        }

        public LoginService(IRestClient restClient)
        {
            _restClient = restClient;
        }

        public async Task<bool> Login(UserModel user)
        {
            var result = await _restClient.Post<UserModel>(Resources.UserLogin, user);
            return result;
        }

        public async Task<bool> Login(UserRegisterModel registerModel)
        {
            var loginModel = new UserModel
            {
                Email = registerModel.Email,
                Password = registerModel.Password,
                RememberMe = false,
            };
            var result = await _restClient.Post<UserModel>(Resources.UserLogin, loginModel);
            return result;
        }
    }
}
