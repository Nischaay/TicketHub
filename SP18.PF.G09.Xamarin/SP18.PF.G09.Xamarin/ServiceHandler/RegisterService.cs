using SP18.PF.G09.Xamarin.Models;
using SP18.PF.G09.Xamarin.Resources;
using SP18.PF.G09.Xamarin.RestApi;
using System.Threading.Tasks;

namespace SP18.PF.G09.Xamarin.ServiceHandler
{
    public class RegisterService
    {
        private readonly IRestClient _restClient;

        public RegisterService()
        {
            _restClient = new RestClient();
        }

        public RegisterService(IRestClient restClient)
        {
            _restClient = restClient;
        }

        public async Task<bool> Registration(UserRegisterModel registerModel)
        {
            var httpClient = _restClient.PrepareClient(false);
            if (ValidateUserRegistration(registerModel))
            {
                var result = await _restClient.Post<UserRegisterModel>(httpClient,Constants.RegisterUserUrl, registerModel);
                return result;
            }
            return false;
        }

        public bool ValidateUserRegistration(UserRegisterModel registerModel)
        {
            return true;
        }
    }
}
