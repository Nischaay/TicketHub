using SP18.PF.G09.Xamarin.RestApi;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using SP18.PF.Core.Features.Venues;

namespace SP18.PF.G09.Xamarin.ServiceHandler
{
    public class GetVenues
    {
        private readonly IRestClient _restClient;
        public GetVenues()
        {
            _restClient = new RestClient();
        }

        public GetVenues(IRestClient restClient)
        {
            _restClient = restClient;
        }

        public async Task<List<Venue>> getVenues()
        {
            var listvenues = await _restClient.GetAll<Venue>(Resources.GetAllVenues);
            return listvenues;
        }
    }
}
