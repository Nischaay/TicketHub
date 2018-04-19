using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using SP18.PF.Core.Features.Users;
using SP18.PF.Core.Features.Venues;
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


        public async Task<bool> CheckLoginIfExists(string email, string password)
        {
            var loginModel = new User
            {
                Email = email,
                Password = password
            };
            var result = await _restClient.Post<User>(Resources.UserLogin, loginModel);
            return result;
        }
    }
}
