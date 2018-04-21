using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using SP18.PF.G09.Xamarin.Views;
using Xamarin.Forms;

namespace SP18.PF.G09.Xamarin
{
	public partial class App : Application
	{
		public App ()
		{
			InitializeComponent();
            MainPage = new NavigationPage(new Login());
            //MainPage = new SP18.PF.G09.Xamarin.Home();
            //MainPage = new TabbedPage
            //{
            //    Children = {
            //        new MainPage(),
            //        new Login(),
            //        new Registration()
            //    }
            //};
        }

		protected override void OnStart ()
		{
			// Handle when your app starts
		}

		protected override void OnSleep ()
		{
			// Handle when your app sleeps
		}

		protected override void OnResume ()
		{
			// Handle when your app resumes
		}
	}
}
