using SP18.PF.G09.Xamarin.Resources;
using SP18.PF.G09.Xamarin.ServiceHandler;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace SP18.PF.G09.Xamarin.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Dashboard : ContentPage
    {
        public Dashboard()
        {
            var cookieService = new CookieService();

            InitializeComponent();

            if (cookieService.GetCookie(Constants.WebServiceBaseUrl) == null)
            {
                Navigation.PushAsync(new NavigationPage( new Home()));
            }
            else
            {
                Navigation.PushAsync(new LoggedInPage());
            }
        }
    }
}