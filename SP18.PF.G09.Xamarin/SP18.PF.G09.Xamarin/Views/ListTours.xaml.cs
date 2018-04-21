using SP18.PF.G09.Xamarin.ServiceHandler;
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
	public partial class ListTours : ContentPage
	{
		public ListTours ()
		{
			InitializeComponent ();
            getTours();
		}
        GetToursService services = new GetToursService();

        public async void getTours()
        {
            var lists = await services.getTour();
            ToursListView.ItemsSource = lists;
        }
    }
}