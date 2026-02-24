using System;
using Microsoft.Extensions.DependencyInjection;
using QbCloneApp.ViewModels;
using QbCloneApp.Views;

namespace QbCloneApp.Services;

public interface IWindowService: IDisposable
{
    void CreateScope(Action<IServiceCollection> confServices);
    
    MainWindow Show<VM>() where VM : ViewModelBase;
    
    void Hide();
}