using System.ComponentModel;
using CommunityToolkit.Mvvm.ComponentModel;
using Microsoft.AspNetCore.Components;

namespace WebApp.Pages;

public class BaseView<TViewModel> : ComponentBase, IDisposable
    where TViewModel : ObservableObject, IDisposable
{
    [Inject] protected TViewModel ViewModel { get; set; } = default!;
    
    protected override void OnInitialized()
    {
        ViewModel.PropertyChanged += OnViewModelPropertyChanged;
    }

    private void OnViewModelPropertyChanged(object? sender, PropertyChangedEventArgs e)
    {
        InvokeAsync(StateHasChanged);
    }   
    
    public void Dispose()
    {
        ViewModel.Dispose();
        ViewModel.PropertyChanged -= OnViewModelPropertyChanged;
    }
}