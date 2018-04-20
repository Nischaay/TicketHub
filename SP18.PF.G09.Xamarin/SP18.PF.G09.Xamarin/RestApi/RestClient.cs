using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace SP18.PF.G09.Xamarin.RestApi
{
    public interface IRestClient
    {
        Task<bool> Post<T>(string url, T payload);
        Task<List<TEntity>> GetAll<TEntity>(string url);
        Task<bool> Delete<TEntity>(string url);
        Task<bool> Update<T>(string url, T payload);
    }



    public class RestClient : IRestClient
    {
        //private const string WebServiceUrl = "http://localhost:5000/api/";
        private const string WebServiceUrl = "https://sp18pfg09.azurewebsites.net/api/";

        public async Task<bool> Post<T>(string url, T payload)
        {
            var uri = $"{WebServiceUrl}{url}";
            var client = new HttpClient();
            var jsonString = JsonConvert.SerializeObject(payload);
            var content = new StringContent(jsonString, Encoding.UTF8, "application/Json");
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/Json"));
            client.Timeout = new System.TimeSpan(0, 0, 0, 4, 0);
            try
            {
                var result = await client.PostAsync(uri, content).ConfigureAwait(false);
                return result.IsSuccessStatusCode;
            }catch(Exception e)
            {
                return false;
            }
        }

        public async Task<List<TEntity>> GetAll<TEntity>(string url)
        {
            var uri = $"{WebServiceUrl}{url}";
            var client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/Json"));
            var result = await client.GetAsync(uri).ConfigureAwait(false);
            var responseObject = JsonConvert.DeserializeObject<List<TEntity>>(await result.Content.ReadAsStringAsync());
            return responseObject;
        }


        public async Task<TEntity> GetOne<TEntity>(string url)
        {
            var uri = $"{WebServiceUrl}{url}";
            var client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/Json"));
            var result = await client.GetAsync(uri).ConfigureAwait(false);
            var responseObject = JsonConvert.DeserializeObject<TEntity>(await result.Content.ReadAsStringAsync());
            return responseObject;
        }


        public async Task<bool> Delete<TEntity>(string url)
        {
            var uri = $"{WebServiceUrl}{url}";
            var client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/Json"));
            var result = await client.DeleteAsync(uri).ConfigureAwait(false);
            return result.IsSuccessStatusCode;
        }

        public async Task<bool> Update<T>(string url, T payload)
        {
            var uri = $"{WebServiceUrl}{url}";
            var client = new HttpClient();
            var jsonString = JsonConvert.SerializeObject(payload);
            var content = new StringContent(jsonString, Encoding.UTF8, "application/Json");
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/Json"));
            var result = await client.PutAsync(uri, content).ConfigureAwait(false);
            return result.IsSuccessStatusCode;
        }
    }
}
