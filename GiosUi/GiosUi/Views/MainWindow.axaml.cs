using Avalonia.Controls;
using GiosUi.ViewModels;

namespace GiosUi.Views;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        DataContext = new MainViewModel();
    }
}