using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using SP18.PF.Core.Features.Users;
using SP18.PF.Core.Features.Venues;
using SP18.PF.G09.Xamarin.Models;
using SP18.PF.G09.Xamarin.RestApi;
using SP18.PF.G09.Xamarin.ServiceHandler;
using SP18.PF.G09.Xamarin.Resources;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using System.Linq;

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
            //HttpClientHandler handler = new HttpClientHandler
            //{
            //    CookieContainer = _cookieService.GetCookieContainer()
            //};

            //HttpClient client = new HttpClient(handler);
            //var uri = $"{Constants.WebServiceUrl}{Constants.UserLogin}";

            HttpClient client = _restClient.PrepareClient();
            try
            {
                var content = _restClient.PrepareContent(user);
                //var jsonString = JsonConvert.SerializeObject(user);
                //var content = new StringContent(jsonString, Encoding.UTF8, "application/Json");
                //client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/Json"));
                //client.Timeout = new TimeSpan(0, 0, 0, 4, 0);
                HttpResponseMessage result = await client.PostAsync(Constants.UserLogin, content).ConfigureAwait(false);
                return result.IsSuccessStatusCode;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Login(UserRegisterModel registerModel)
        {
            var loginModel = new UserModel
            {
                Email = registerModel.Email,
                Password = registerModel.Password,
                RememberMe = false,
            };
            var result = await _restClient.Post<UserModel>(Constants.UserLogin, loginModel);
            return result;
        }
    }
}
