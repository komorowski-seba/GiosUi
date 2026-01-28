using CommunityToolkit.Mvvm.ComponentModel;

namespace GiosWebApp.ViewModels;

public partial class MainWindowViewModel : ViewModelBase
{
    public string Greeting { get; } = "Welcome to Avalonia!";
    
    [ObservableProperty]
    private ViewModelBase? _currentViewModel;
}
