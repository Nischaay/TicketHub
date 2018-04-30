using System.Threading.Tasks;
using SP18.PF.G09.Xamarin.Models;
using SP18.PF.G09.Xamarin.RestApi;
using SP18.PF.G09.Xamarin.Resources;

namespace SP18.PF.G09.Xamarin.ServiceHandler
{
    public class LoginService
    {
        private readonly IRestClient _restClient;
        private readonly CookieService _cookieService;

        public LoginService()
        {
            _restClient = new RestClient();
            _cookieService = new CookieService();
        }

        public LoginService(IRestClient restClient)
        {
            _restClient = restClient;
        }

        public async Task<bool> Login(UserModel user)
        {
            var httpClient = _restClient.PrepareClient();
            var result = await _restClient.Post<UserModel>(httpClient, Constants.UserLoginUrl, user);
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

            var httpClient = _restClient.PrepareClient();
            var result = await _restClient.Post<UserModel>(httpClient, Constants.UserLoginUrl, loginModel);
            return result;
        }
    }
}
