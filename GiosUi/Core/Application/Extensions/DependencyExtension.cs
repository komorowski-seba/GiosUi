using Microsoft.Extensions.DependencyInjection;

namespace Core.Application.Extensions;

public static class DependencyExtension
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        return services;
    }
}