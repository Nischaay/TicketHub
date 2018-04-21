using SP18.PF.Core.Features.Shared;
using SP18.PF.G09.Xamarin.Models;
using SP18.PF.G09.Xamarin.ServiceHandler;
using System;

using Xamarin.Forms;

namespace SP18.PF.G09.Xamarin.Views
{
    public partial class Registration : ContentPage
    {
        public Registration()
        {
            InitializeComponent();
        }


        private async void ButtonRegister_Clicked(object sender, EventArgs e)
        {
            RegisterService _registrationService = new RegisterService();
            var registerModel = new UserRegisterModel
            {

                Email = string.IsNullOrWhiteSpace(email.Text) ? "nischaayTest1@email.com" : email.Text,
                Password = string.IsNullOrWhiteSpace(password.Text) ? "password" : password.Text,
                ConfirmPassword = string.IsNullOrWhiteSpace(confirmpassword.Text) ? "password" : confirmpassword.Text,
                BillingAddress = new Address
                {
                    AddressLine1 = string.IsNullOrWhiteSpace(addressLine1.Text) ? "addressLine1" : addressLine1.Text,
                    AddressLine2 = string.IsNullOrWhiteSpace(addressLine2.Text) ? "addressLine2" : addressLine2.Text,
                    City = string.IsNullOrWhiteSpace(city.Text) ? "hammond" : city.Text,
                    State = string.IsNullOrWhiteSpace(state.Text) ? "LA" : state.Text,
                    ZipCode = string.IsNullOrWhiteSpace(zipCode.Text) ? "70401" : zipCode.Text
                }
            };

            var getRegistration = await _registrationService.Registration(registerModel);

            if (getRegistration)
            {
                await DisplayAlert("Register success", "Registration Successful. Please wait while we log you in.", "Okay", "Cancel");
                var _loginService = new LoginService();
                var loginResult = await _loginService.Login(registerModel);
                
                if (!loginResult)
                    await DisplayAlert("Error!!", "Login unsuccessful. Please try again.", "Okay", "Cancel");
                else
                    await DisplayAlert("Success!!", "Login successful", "Okay", "Cancel");
            }
            else
            {
                await DisplayAlert("Error!!", "Registration unsuccessful. Please try again.", "Okay", "Cancel");
            }
        }
    }
}