using SP18.PF.G09.Xamarin.Models;
using SP18.PF.G09.Xamarin.RestApi;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SP18.PF.G09.Xamarin.ServiceHandler
{
    class GetToursService
    {
        private readonly IRestClient _restClient;
        public GetToursService()
        {
            _restClient = new RestClient();
        }

        public GetToursService(IRestClient restClient)
        {
            _restClient = restClient;
        }

        public async Task<List<ToursModel>> getTour()
        {
            var tourlist = await _restClient.GetAll<ToursModel>(Resources.GetAllTours);
            return tourlist;
        }
    }
}
