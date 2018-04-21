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
        ToursService services;

        public ListTours ()
		{
            services = new ToursService();
            InitializeComponent ();
            GetAllTours();
		}


        public async void GetAllTours()
        {
            var lists = await services.GetAllTours();
            ToursListView.ItemsSource = lists;
        }
    }
}