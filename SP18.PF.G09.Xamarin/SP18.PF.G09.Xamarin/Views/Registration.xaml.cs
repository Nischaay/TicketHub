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
	public partial class Registration : ContentPage
	{
		public Registration ()
		{
			InitializeComponent ();
		}
        private async void ButtonRegister_Clicked(object sender, EventArgs e)
        {
            RegisterService services = new RegisterService();

            if(password.Text == confirmpassword.Text)
            {
                var getRegistration = await services.Registration(email.Text, password.Text, addressLine1.Text, addressLine2.Text, zipCode.Text, city.Text, state.Text);

                if (getRegistration)
                {
                    await DisplayAlert("Register success", "You are login", "Okay", "Cancel");
                }
                else
                {
                    await DisplayAlert("Registration unsuccessful", "Please try again.", "Okay", "Cancel");
                }
            }
            else
            {
                await DisplayAlert("Password and confirm password does not match.", "Please try again", "okay", "Cancel");
            }
            //var getRegistration = await services.Registration(email.Text, password.Text, addressLine1.Text, addressLine2.Text, city.Text, state.Text, zipCode.Text);
            //if (getRegistration)
            //{
            //    await DisplayAlert("Register success", "You are login", "Okay", "Cancel");
            //}
            //else
            //{
            //    await DisplayAlert("Login failed", "Username or Password is incorrect or not exists", "Okay", "Cancel");
            //}

        }
    }
}