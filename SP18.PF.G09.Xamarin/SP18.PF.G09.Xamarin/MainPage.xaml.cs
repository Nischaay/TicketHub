using SP18.PF.G09.Xamarin.Views;
using Xamarin.Forms;

namespace SP18.PF.G09.Xamarin
{
    public partial class MainPage : ContentPage
	{
		public MainPage()
		{
			InitializeComponent();
            Navigation.PushAsync(new TicketView());
            //MainPage = new NavigationPage(new Login());

        }
    }
}
