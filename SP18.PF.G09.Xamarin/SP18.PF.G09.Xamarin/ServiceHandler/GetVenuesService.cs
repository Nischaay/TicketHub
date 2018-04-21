using SP18.PF.G09.Xamarin.RestApi;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using SP18.PF.Core.Features.Venues;
using SP18.PF.G09.Xamarin.Models;

namespace SP18.PF.G09.Xamarin.ServiceHandler
{
    public class GetVenuesService
    {
        private readonly IRestClient _restClient;
        public GetVenuesService()
        {
            _restClient = new RestClient();
        }

        public GetVenuesService(IRestClient restClient)
        {
            _restClient = restClient;
        }

        public async Task<List<VenueModel>> GetVenues()
        {
            var listvenues = await _restClient.GetAll<VenueModel>(Resources.GetAllVenues);
            return listvenues;
        }
    }
}
