using SP18.PF.G09.Xamarin.RestApi;
using System.Collections.Generic;
using System.Threading.Tasks;
using SP18.PF.G09.Xamarin.Models;
using SP18.PF.G09.Xamarin.Resources;

namespace SP18.PF.G09.Xamarin.ServiceHandler
{
    public class VenuesService
    {
        private readonly IRestClient _restClient;
        public VenuesService()
        {
            _restClient = new RestClient();
        }

        public VenuesService(IRestClient restClient)
        {
            _restClient = restClient;
        }

        public async Task<List<VenueModel>> GetAllVenues()
        {
            var httpClient = _restClient.PrepareClient();
            var listvenues = await _restClient.GetAll<VenueModel>(httpClient, Constants.GetAllVenuesUrl);
            return listvenues;
        }
    }
}
