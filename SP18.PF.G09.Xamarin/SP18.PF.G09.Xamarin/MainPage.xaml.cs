using SP18.PF.G09.Xamarin.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
