using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;

namespace GiosApp.ViewModels;

public partial class CounterViewModel : ObservableObject
{
    [ObservableProperty]
    private int _count;
    
    [RelayCommand]
    private void Increment() => Count += 1;
}