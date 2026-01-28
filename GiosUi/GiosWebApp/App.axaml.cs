using Avalonia;
using Avalonia.Controls.ApplicationLifetimes;
using Avalonia.Data.Core;
using Avalonia.Data.Core.Plugins;
using System.Linq;
using Avalonia.Markup.Xaml;
using Core.Application.Extensions;
using GiosWebApp.Services;
using GiosWebApp.ViewModels;
using GiosWebApp.Views;
using Microsoft.Extensions.DependencyInjection;

namespace GiosWebApp;

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
       
            services.AddTransient<MainWindowViewModel>();
            services.AddTransient<DataSourceViewModel>();
            services.AddTransient<UpdatingFilesViewModel>();
       
            services.AddApplication();
            // services.AddInfrastructure();            
        });
        
        if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)
        {
            desktop.Exit += (_, _) =>
            {
                _windowService.Dispose();
            };
            
            
            // Avoid duplicate validations from both Avalonia and the CommunityToolkit. 
            // More info: https://docs.avaloniaui.net/docs/guides/development-guides/data-validation#manage-validationplugins
            DisableAvaloniaDataAnnotationValidation();
            
            desktop.MainWindow = _windowService.Show<DataSourceViewModel>();
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

/*

   
   public override void Initialize()
   {
       AvaloniaXamlLoader.Load(this);
   }

   public override void OnFrameworkInitializationCompleted()
   {
       
       if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)
       {
           
           var showItemDataSource = new NativeMenuItem("Pokaż okno - data source ");
           showItemDataSource.Click += (_, _) =>
           {
               
           };

           var showItemUpdateFiles = new NativeMenuItem("Pokaż okno - update files ");
           showItemUpdateFiles.Click += (_, _) =>
           {
               desktop.MainWindow = _windowService.Show<UpdatingFilesViewModel>();
           };
           
           var exitItem = new NativeMenuItem("Zakończ");
           exitItem.Click += (_, _) => desktop.Shutdown();

           var trayMenu = new NativeMenu
           {
               Items =
               {
                   showItemDataSource,
                   showItemUpdateFiles,
                   new NativeMenuItemSeparator(),
                   exitItem
               }
           };

           var trayIcon = new TrayIcon
           {
               Icon = new WindowIcon(
                   AssetLoader.Open(new Uri("avares://QbCloneApp/Assets/avalonia-logo.ico"))
               ),
               ToolTipText = "Moja aplikacja Avalonia",
               Menu = trayMenu,
               IsVisible = true
           };
               
           // Avoid duplicate validations from both Avalonia and the CommunityToolkit. 
           // More info: https://docs.avaloniaui.net/docs/guides/development-guides/data-validation#manage-validationplugins
           DisableAvaloniaDataAnnotationValidation();
       }

       base.OnFrameworkInitializationCompleted();
   }

*/