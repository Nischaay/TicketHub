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
    public partial class ListVenues : ContentPage
    {
        public ListVenues()
        {
            InitializeComponent();
            getVenuesData();
        }

        VenuesService services = new VenuesService();

        private async void getVenuesData()
        {
            var lists = await services.GetAllVenues();
            VenuesListView.ItemsSource = lists;
        }
    }
}