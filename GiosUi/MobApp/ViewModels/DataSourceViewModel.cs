using System;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.Input;
using Core.Application.Extensions;
using Core.Application.Services;

namespace QbCloneApp.ViewModels;

public partial class DataSourceViewModel : ViewModelBase
{
    private readonly IRCloneService _rCloneService;
    private static bool _isLoadData = false;

    public DataSourceViewModel(IRCloneService rCloneService)
    {
        _rCloneService = rCloneService;
    }

    [RelayCommand]
    private async Task LoadDataAsync()
    {
        if (_isLoadData) 
            return;
        
        var result = (await _rCloneService.CheckChanges()).ExtractLog();
        _isLoadData = true;
    }
}