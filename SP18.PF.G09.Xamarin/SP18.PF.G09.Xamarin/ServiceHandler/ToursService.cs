using SP18.PF.G09.Xamarin.Models;
using SP18.PF.G09.Xamarin.Resources;
using SP18.PF.G09.Xamarin.RestApi;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SP18.PF.G09.Xamarin.ServiceHandler
{
    public class ToursService
    {
        private readonly IRestClient _restClient;
        public ToursService()
        {
            _restClient = new RestClient();
        }

        public ToursService(IRestClient restClient)
        {
            _restClient = restClient;
        }

        public async Task<List<ToursModel>> GetAllTours()
        {
            var tourlist = await _restClient.GetAll<ToursModel>(Constants.GetAllToursUrl);
            return tourlist;
        }
    }
}
