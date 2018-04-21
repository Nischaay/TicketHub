using SP18.PF.Core.Features.Shared;

namespace SP18.PF.G09.Xamarin.Models
{
    public class UserRegisterModel
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }

        public Address BillingAddress { get; set; }
    }
}
