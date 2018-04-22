using Newtonsoft.Json;
using SP18.PF.G09.Xamarin.Resources;
using SP18.PF.G09.Xamarin.ServiceHandler;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace SP18.PF.G09.Xamarin.RestApi
{

    public class RestClient : IRestClient
    {
        private readonly CookieService _cookieService;

        public RestClient()
        {
            _cookieService = new CookieService();
        }


        public HttpClient PrepareClient(bool isSetCookie = true)
        {
            HttpClientHandler handler = new HttpClientHandler
            {
                CookieContainer = _cookieService.GetCookieContainer()
            };
            HttpClient client = isSetCookie ? new HttpClient(handler) : new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/Json"));
            client.Timeout = new System.TimeSpan(0, 0, 0, 5, 0);
            client.BaseAddress = new Uri(Constants.WebServiceBaseUrl);
            return client;
        }

        public StringContent PrepareContent<T>(T payload)
        {
            var jsonString = JsonConvert.SerializeObject(payload);
            var content = new StringContent(jsonString, Encoding.UTF8, "application/Json");
            return content;
        }

        public async Task<bool> Post<T>(HttpClient client,string url, T payload)
        {
            var content = PrepareContent(payload);

            try
            {
                HttpResponseMessage result = await client.PostAsync(url, content).ConfigureAwait(false);
                return result.IsSuccessStatusCode;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<List<TEntity>> GetAll<TEntity>(HttpClient client,string url)
        {           
            try
            {
                var result = await client.GetAsync(url).ConfigureAwait(false);
                var responseObject = JsonConvert.DeserializeObject<List<TEntity>>(await result.Content.ReadAsStringAsync());
                return responseObject;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public async Task<TEntity> GetOne<TEntity>(HttpClient client,string url)
        {
            var result = await client.GetAsync(url).ConfigureAwait(false);
            var responseObject = JsonConvert.DeserializeObject<TEntity>(await result.Content.ReadAsStringAsync());
            return responseObject;
        }

        public async Task<bool> Delete<TEntity>(HttpClient client, string url)
        {
            var result = await client.DeleteAsync(url).ConfigureAwait(false);
            return result.IsSuccessStatusCode;
        }

        public async Task<bool> Update<T>(HttpClient client, string url, T payload)
        {
            var content = PrepareContent(payload);
            var result = await client.PutAsync(url, content).ConfigureAwait(false);
            return result.IsSuccessStatusCode;
        }
    }
}
