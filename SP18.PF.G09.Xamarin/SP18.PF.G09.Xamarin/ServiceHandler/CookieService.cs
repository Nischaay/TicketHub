using SP18.PF.G09.Xamarin.Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;

namespace SP18.PF.G09.Xamarin.ServiceHandler
{
    public class CookieService
    {
        private static CookieContainer _cookieContainer;

        static CookieService()
        {
            _cookieContainer = new CookieContainer();
        }

        public CookieContainer GetCookieContainer()
        {
            return _cookieContainer;
        }

        public Cookie GetCookie(string uri = Constants.WebServiceBaseUrl)
        {
            Uri cookieUri = new Uri(uri);
            try
            {
                IEnumerable<Cookie> responseCookies = _cookieContainer.GetCookies(cookieUri)?.Cast<Cookie>();
                return responseCookies?.FirstOrDefault();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }

        public void ClearAllCookies()
        {
            _cookieContainer = new CookieContainer();
        }

        public void ClearCookie(string uri = Constants.WebServiceBaseUrl)
        {
            var webUri = new Uri(uri);
            _cookieContainer.SetCookies(webUri, null);
        }
    }
}
