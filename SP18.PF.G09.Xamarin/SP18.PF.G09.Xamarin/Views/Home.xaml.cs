using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace SP18.PF.G09.Xamarin.Views
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class Home : ContentPage
	{
		public Home ()
		{
			InitializeComponent ();
		}
        private async void gotoLogin_Clicked(object sender, EventArgs e) {
            await Navigation.PushAsync(new Login());
        }
        private async void gotoRegistern_Clicked(object sender, EventArgs e) {
            await Navigation.PushAsync(new Registration());
        }
        private async void gotoDashboard_Clicked(object sender, EventArgs e) {
            await Navigation.PushAsync(new ListTours());
        }

    }
}