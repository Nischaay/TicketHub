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
	public partial class Events : ContentPage
	{
		public Events ()
		{
			InitializeComponent ();

            //Grid grid = new Grid
            //{
            //    VerticalOptions = LayoutOptions.FillAndExpand,
            //    ColumnDefinitions =
            //    {
            //        new ColumnDefinition { Width = GridLength.Auto },
            //        new ColumnDefinition { Width = new GridLength(1, GridUnitType.Star) },
            //        new ColumnDefinition { Width = new GridLength(100, GridUnitType.Absolute) }
            //        new ColumnDefinition { Width = GridLength.Auto },
            //        new ColumnDefinition { Width = new GridLength(1, GridUnitType.Star) },
            //        new ColumnDefinition { Width = new GridLength(100, GridUnitType.Absolute) }
            //    }
            //};

        }
	}
}