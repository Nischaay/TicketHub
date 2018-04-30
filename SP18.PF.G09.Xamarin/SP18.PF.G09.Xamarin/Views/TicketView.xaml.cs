using SP18.PF.G09.Xamarin.ServiceHandler;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace SP18.PF.G09.Xamarin.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class TicketView : ContentPage
	{

        private readonly TicketService _ticketService;
        
		public TicketView ()
		{
			InitializeComponent ();
            _ticketService = new TicketService();
            GetAllTickets();
        }

        public async void GetAllTickets()
        {
            var myTickets = await _ticketService.GetAllTickets();
        }
	}
}