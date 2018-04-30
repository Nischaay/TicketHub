using SP18.PF.G09.Xamarin.Models;
using SP18.PF.G09.Xamarin.ServiceHandler;
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace SP18.PF.G09.Xamarin.Views
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class Login : ContentPage
	{
		public Login ()
		{
			InitializeComponent ();
		}


        private async void ButtonLogin_Clicked(object sender, EventArgs e)
        {
            LoginService services = new LoginService();
            var user = new UserModel
            {
                Email = string.IsNullOrEmpty(EntryEmail.Text) ? "admin@envoc.com" : EntryEmail.Text ,
                Password = string.IsNullOrEmpty(EntryPassword.Text) ? "password" : EntryPassword.Text,
                RememberMe = RememberMe.IsToggled
            };
            var getLoginDetails = await services.Login(user);

            if (getLoginDetails)
            {
                await DisplayAlert("Login success", "You are login", "Okay", "Cancel");
                await Navigation.PushAsync(new Dashboard());
            }
            else
            {
                await DisplayAlert("Login failed", "Username or Password is incorrect or not exists", "Okay", "Cancel");
            }
        }

        //private async void ButtonRegister_Clicked(object sender, EventArgs e)
        //{
        //    await Navigation.PushAsync(new Registration());
        //}
    }
}