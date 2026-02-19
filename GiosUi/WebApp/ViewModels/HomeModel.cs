using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.JSInterop;

namespace WebApp.ViewModels;

public partial class HomeModel : ObservableObject, IDisposable
{
    private readonly IJSRuntime _jsRuntime;
    
    private DotNetObjectReference<HomeModel>? _objRef;
    
    [ObservableProperty] 
    private bool _openDetails;

    public HomeModel(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }
    
    [RelayCommand]
    private void HideDetails() => OpenDetails = false;

    [RelayCommand]
    private async Task ShowGiosOnMap()
    {
        _objRef = DotNetObjectReference.Create(this);
        await _jsRuntime.InvokeVoidAsync("initLeafletMap", 52.2297, 21.0122, _objRef);
    }

    [JSInvokable]
    public void OnMarkClicked(double lat, double lng)
    {
        Console.WriteLine($"Kliknięto marker: {lat}, {lng}");
        OpenDetails = true;
    }
    
    public void Dispose()
    {
        _objRef?.Dispose();
    }
}