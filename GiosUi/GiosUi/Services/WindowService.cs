using System;
using GiosWebApp.ViewModels;
using GiosWebApp.Views;
using Microsoft.Extensions.DependencyInjection;

namespace GiosWebApp.Services;

public class WindowService: IWindowService
{
    private MainWindow? _window;
    private IServiceScope? _scope;
    
    public MainWindow? MainWindow => _window;
    
    public void CreateScope(System.Action<IServiceCollection> confServices)
    {
        var services = new ServiceCollection();
        confServices(services);
        var serviceProvider = services.BuildServiceProvider();
        _scope = serviceProvider.CreateScope();
    }
    
    public MainWindow Show<VM>() where VM : ViewModelBase
    {
        if (_window == null)
            _window = _scope!.ServiceProvider.GetService<MainWindow>();
        
        ((MainWindowViewModel)_window!.DataContext!).CurrentViewModel = _scope!.ServiceProvider.GetService<VM>();
        _window.Show();
        _window.Activate();
        
        return _window;
    }

    public void Hide()
    {
        _window?.Hide();
    }

    public void Dispose()
    {
        _scope?.Dispose();
    }
}