using Avalonia.Controls;
using MobApp.ViewModels;

namespace MobApp.Views;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        DataContext = new MainWindowViewModel();
    }
}