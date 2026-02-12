using System;
using Avalonia;
using Avalonia.Controls.ApplicationLifetimes;
using Avalonia.Data.Core.Plugins;
using System.Linq;
using Avalonia.Markup.Xaml;
using Core.Application.Extensions;
using GiosUi.Services;
using GiosUi.ViewModels;
using GiosUi.Views;
using Microsoft.Extensions.DependencyInjection;

namespace GiosUi;

public partial class App : Application
{
    private readonly IWindowService _windowService = new WindowService();
    
    public override void Initialize()
    {
        AvaloniaXamlLoader.Load(this);
    }

    public override void OnFrameworkInitializationCompleted()
    {
        _windowService.CreateScope((services) =>
        {
            services.AddScoped<MainWindow>();
       
            services.AddTransient<DataSourceView>();
            services.AddTransient<UpdatingFilesView>();
       
            services.AddTransient<MainViewModel>();
            services.AddTransient<DataSourceViewModel>();
            services.AddTransient<UpdatingFilesViewModel>();
       
            services.AddApplication();
            // services.AddInfrastructure();            
        });

        /*
            var showItemDataSource = new NativeMenuItem("Pokaż okno - data source ");
            showItemDataSource.Click += (_, _) =>
            {
                desktop.MainWindow = _windowService.Show<DataSourceViewModel>();
            };

            var showItemUpdateFiles = new NativeMenuItem("Pokaż okno - update files ");
            showItemUpdateFiles.Click += (_, _) =>
            {
                desktop.MainWindow = _windowService.Show<UpdatingFilesViewModel>();
            };
            
            var exitItem = new NativeMenuItem("Zakończ");
            exitItem.Click += (_, _) => desktop.Shutdown();
        */
        
        // if (ApplicationLifetime is ISingleViewApplicationLifetime singleView)
        // {
        //     // singleView.
        //     //
        //     // singleView.MainView = new MainView { DataContext = new MainViewModel() };
        // }        
        
        switch (ApplicationLifetime)
        {
            case ISingleViewApplicationLifetime singleViewPlatform:
                Console.WriteLine(" === >> here");
                singleViewPlatform.MainView = _windowService.Show<DataSourceViewModel>();
                // singleViewPlatform.MainView = new MainView
                // {
                //     DataContext = new MainViewModel()
                // };
                break;
            
            case IClassicDesktopStyleApplicationLifetime desktop:
                // Avoid duplicate validations from both Avalonia and the CommunityToolkit. 
                // More info: https://docs.avaloniaui.net/docs/guides/development-guides/data-validation#manage-validationplugins
                DisableAvaloniaDataAnnotationValidation();
                desktop.MainWindow = new MainWindow
                {
                    DataContext = new MainViewModel()
                };
                break;
        }

        base.OnFrameworkInitializationCompleted();
    }

    private void DisableAvaloniaDataAnnotationValidation()
    {
        // Get an array of plugins to remove
        var dataValidationPluginsToRemove =
            BindingPlugins.DataValidators.OfType<DataAnnotationsValidationPlugin>().ToArray();

        // remove each entry found
        foreach (var plugin in dataValidationPluginsToRemove)
        {
            BindingPlugins.DataValidators.Remove(plugin);
        }
    }
}