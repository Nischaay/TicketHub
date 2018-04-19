using SP18.PF.Core.Features.Users;
using SP18.PF.G09.Xamarin.RestApi;
using System;
using System.Collections.Generic;
using System.Text;
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


        public async Task<bool> Registration(string email, string password,string addressLine1, string addressLine2, string zipCode,string city, string state )
        {
            var RegisterModel = new User
            {
                Email = email,
                Password = password,
                BillingAddress = {
                    AddressLine1 = addressLine1,
                    AddressLine2 = addressLine2,
                    ZipCode = zipCode,
                    City = city,
                    State = state
                } 
            };
            var result = await _restClient.Post<User>(Resources.RegisterUser, RegisterModel);
            return result;
        }
    }
}
