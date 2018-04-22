using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace SP18.PF.G09.Xamarin.RestApi
{
    public interface IRestClient
    {
        Task<bool> Post<T>(HttpClient client, string url, T payload);
        Task<List<TEntity>> GetAll<TEntity>(HttpClient client, string url);
        Task<bool> Delete<TEntity>(HttpClient client, string url);
        Task<bool> Update<T>(HttpClient client, string url, T payload);
        HttpClient PrepareClient(bool isSetCookie = true);
        StringContent PrepareContent<T>(T payload);
    }
}
