using System.Threading.Tasks;
using CommunityToolkit.Mvvm.Input;

namespace GiosUi.ViewModels;

public partial class DataSourceViewModel : ViewModelBase
{
    private static bool _isLoadData = false;

    public DataSourceViewModel()
    {
    }

    [RelayCommand]
    private Task LoadDataAsync()
    {
        if (_isLoadData) 
            return Task.CompletedTask;
        
        _isLoadData = true;
        return Task.CompletedTask;
    }
}