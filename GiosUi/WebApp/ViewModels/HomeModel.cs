using CommunityToolkit.Mvvm.ComponentModel;
using MvvmBlazor.ViewModel;

namespace WebApp.ViewModels;

public class HomeModel : ViewModelBase
{
    [ObservableProperty]
    
    // [Notify]
    // private string _myMessage = default!;
    //
    // [Parameter]
    // public int CurrentCount { get; set; }
    //
    // private bool _canSetCount => CurrentCount > 3;
    //
    // [RelayCommand(CanExecute = nameof(_canSetCount))]
    // private void SetCount()
    // {
    //     MyMessage = "S'cool!";
    // }
}