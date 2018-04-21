using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace SP18.PF.G09.Xamarin.RestApi
{
    public interface IRestClient
    {
        Task<bool> Post<T>(string url, T payload);
        Task<List<TEntity>> GetAll<TEntity>(string url);
        Task<bool> Delete<TEntity>(string url);
        Task<bool> Update<T>(string url, T payload);
        HttpClient PrepareClient(bool isSetCookie = true);
        StringContent PrepareContent<T>(T payload);
    }
}
