using Microsoft.EntityFrameworkCore;
using SP18.PF.Core.Features.Events;
using SP18.PF.Core.Features.Shared;
using SP18.PF.Core.Features.Tickets;
using SP18.PF.Core.Features.Tours;
using SP18.PF.Core.Features.Users;
using SP18.PF.Core.Features.Venues;
using SP18.PF.Web.Helpers;
using System;
using System.Linq;

namespace SP18.PF.Web.Data
{
    public static class DbInitilizer
    {
        public static void SeedData(DbContext dataContext)
        {
            SeedUsers(dataContext);
            SeedVenues(dataContext);
            SeedTours(dataContext);
            SeedScheduledEvents(dataContext);
            SeedTickets(dataContext);
        }

        private static void SeedTickets(DbContext dataContext)
        {
            var tickets = dataContext.Set<Ticket>();
            if (tickets.Any())
            {
                return;
            }
            var events = dataContext.Set<Event>().ToArray();
            var users = dataContext.Set<User>().ToArray();
            for (int i = 0; i < 5000; i++)
            {
                var @event = events[i % events.Length];
                var user = users[i % users.Length];

                tickets.Add(new Ticket
                {
                    Event = @event,
                    User = user,
                    PurchasePrice = @event.TicketPrice
                });
            }
            dataContext.SaveChanges();
        }

        private static void SeedScheduledEvents(DbContext dataContext)
        {
            var events = dataContext.Set<Event>();
            if (events.Any())
            {
                return;
            }
            var tours = dataContext.Set<Tour>().Select(x => x.Id).ToArray();
            var venues = dataContext.Set<Venue>().Select(x => x.Id).ToArray();
            for (int i = 0; i < 4; i++)
            {
                var tour = tours[i];
                for (int j = 0; j < 4; j++)
                {
                    var venue = venues[(i * 10 + j * 7) % venues.Length];
                    var start = DateTimeOffset.Now.AddDays(1 + i).AddHours(i);
                    events.Add(new Event
                    {
                        TourId = tour,
                        VenueId = venue,
                        TicketPrice = (i + 1) * 3,
                        EventStart = start,
                        EventEnd = start.AddHours(j + 1)
                    });
                }
            }
            dataContext.SaveChanges();
        }

        private static void SeedTours(DbContext dataContext)
        {
            var tours = dataContext.Set<Tour>();
            if (tours.Any())
            {
                return;
            }
            string[] tourNames = {
                "Bruno Mars",
                "Imagine Dragon",
                "Camila Cabello",
                "Taylor Swift",
            };
            string[] tourDesc = {
                "24k Magic with our favourite pop king",
                "Thunderous performence with the dragons you can't even imagine",
                "Lets go on a tour to Havana with Camillia",
                "Taylor Swift brings her reputation to New Orleans."
                };
            for (int i = 0; i < 4; i++)
            {
                tours.Add(new Tour
                {
                    Name = tourNames[i],
                    Description = tourDesc[i]
                });
            }
            dataContext.SaveChanges();
        }

        private static void SeedVenues(DbContext dataContext)
        {
            var venues = dataContext.Set<Venue>();
            if (venues.Any())
            {
                return;
            }
            string[] venueName =
            {
                "New York Stadium",
                "Stamford Bridge",
                "California Memorial Stadium",
                "Mercedes Superdome"
            };
            string[] address =
            {
                "228 Park Ave S",
                "27 Old Gloucester Street",
                "1186 Roseville Pkwy Ave",
                "1501 Dave Dixon Dr"
            };
            string[] city =
            {
                "Queens",
                "Lindon City",
                "San Fransico",
                "New Orleans"
            };
            string[] state =
            {
                "NY",
                "LO",
                "CA",
                "LA"
            };
            string[] zip =
            {
                "10001",
                "14114",
                "90001",
                "40001"
            };
            string[] desc =
            {
                "Make your mark in New York and you are a made man",
                "The capital of the british empire",
                "Spend the summer with us in the california beaches at the west coast",
                "Southern heat in Nawlins"
            };
            for (int i = 0; i < 4; i++)
            {
                venues.Add(new Venue
                {
                    Name = venueName[i],
                    PhysicalAddress = new Address
                    {
                        AddressLine1 = address[i],
                        City = city[i],
                        State = state[i],
                        ZipCode = zip[i]
                    },
                    Capacity = 10 * i + 100,
                    Description = desc[i],
                });
            }
            dataContext.SaveChanges();
        }

        private static void SeedUsers(DbContext dataContext)
        {
            var users = dataContext.Set<User>();

            if (users.Any())
            {
                AddAdminUser(dataContext);
                return;
            }
            AddAdminUser(dataContext);
            for (int i = 0; i < 100; i++)
            {

                users.Add(new User
                {
                    Email = $"email{i}@envoc.com",
                    Password = CryptoHelpers.HashPassword($"password{i}"),
                    Role = Roles.Customer,
                    BillingAddress = new Address
                    {
                        AddressLine1 = "123 place St",
                        City = "Hammond",
                        State = "LA",
                        ZipCode = "70403"
                    }
                });
            }
            dataContext.SaveChanges();
        }

        private static void AddAdminUser(DbContext dataContext)
        {
            var users = dataContext.Set<User>();
            if (users.Any(x => x.Email == "admin@envoc.com"))
            {
                return;
            }
            users.Add(new User
            {
                Email = $"admin@envoc.com",
                Password = CryptoHelpers.HashPassword("password"),
                Role = Roles.Admin,
                BillingAddress = new Address
                {
                    AddressLine1 = "123 place St",
                    City = "Hammond",
                    State = "LA",
                    ZipCode = "70403"
                }
            });
            dataContext.SaveChanges();
        }
    }
}