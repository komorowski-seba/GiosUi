using System;
using GiosUi.ViewModels;
using GiosUi.Views;
using Microsoft.Extensions.DependencyInjection;

namespace GiosUi.Services;

public interface IWindowService: IDisposable
{
    void CreateScope(Action<IServiceCollection> confServices);
    
    MainWindow Show<VM>() where VM : ViewModelBase;
    
    void Hide();
}