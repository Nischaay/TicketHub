﻿using SP18.PF.Core.Features.Tickets;
using SP18.PF.G09.Xamarin.Resources;
using SP18.PF.G09.Xamarin.RestApi;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SP18.PF.G09.Xamarin.ServiceHandler
{
    public class TicketService
    {
        private readonly IRestClient _restClient;
        public TicketService()
        {
            _restClient = new RestClient();
        }

        public TicketService(IRestClient restClient)
        {
            _restClient = restClient;
        }

        public async Task<List<Ticket>> GetAllTickets()
        {
            var ticketList = await _restClient.GetAll<Ticket>(Constants.GetAllTicketsUrl);
            return ticketList;
        }
    }
}
