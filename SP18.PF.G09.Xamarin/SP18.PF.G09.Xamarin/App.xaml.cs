
using SP18.PF.G09.Xamarin.Resources;
using SP18.PF.G09.Xamarin.ServiceHandler;
using SP18.PF.G09.Xamarin.Views;
using Xamarin.Forms;

namespace SP18.PF.G09.Xamarin
{
    public partial class App : Application
	{
		public App ()
		{
            InitializeComponent();
            MainPage = new NavigationPage( new Home());
            //MainPage = new NavigationPage(new ListVenues());
        }

		protected override void OnStart ()
		{
			// Handle when your app starts
		}

		protected override void OnSleep ()
		{
			// Handle when your app sleeps
		}

		protected override void OnResume ()
		{
			// Handle when your app resumes
		}
	}
}
