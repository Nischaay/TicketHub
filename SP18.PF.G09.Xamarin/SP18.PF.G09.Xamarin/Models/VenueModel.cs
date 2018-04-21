namespace SP18.PF.G09.Xamarin.Models
{
    public class VenueModel
    {
        public int id { get; set; }
        public PhysicalAddress physicalAddress { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public int capacity { get; set; }

        public class PhysicalAddress
        {
            public string addressLine1 { get; set; }
            public string addressLine2 { get; set; }
            public string zipCode { get; set; }
            public string city { get; set; }
            public string state { get; set; }
        }
    }
}
