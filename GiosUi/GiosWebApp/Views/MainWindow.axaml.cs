using Avalonia.Controls;
using GiosWebApp.ViewModels;

namespace GiosWebApp.Views;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        DataContext = new MainWindowViewModel();
    }
}