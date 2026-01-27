using System;
using GiosWebApp.ViewModels;
using GiosWebApp.Views;
using Microsoft.Extensions.DependencyInjection;

namespace GiosWebApp.Services;

public interface IWindowService
{
    void CreateScope(Action<IServiceCollection> confServices);
    
    MainWindow Show<VM>() where VM : ViewModelBase;
    
    void Hide();

}