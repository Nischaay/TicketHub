﻿using SP18.PF.G09.Xamarin.Models;
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
                RememberMe = false
            };
            var getLoginDetails = await services.Login(user);

            if (getLoginDetails)
            {
                await DisplayAlert("Login success", "You are login", "Okay", "Cancel");
               // await Navigation.PushAsync(new Events());
            }
            else
            {
                await DisplayAlert("Login failed", "Username or Password is incorrect or not exists", "Okay", "Cancel");
            }
        }
    }
}