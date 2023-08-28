using Grpc.Core;
namespace GrpcGreeter.Services;
public class DemoService : Demo.DemoBase
{
    private readonly ILogger<DemoService> _logger;

    public DemoService(ILogger<DemoService> logger)
    {
        _logger = logger;
    }

    public override Task<DemoResponse> SayHello(DemoRequest request, ServerCallContext context)
    {
        return Task.FromResult(new DemoResponse
        {
            Message = $"Hello, {request.Name}!"
        });
    }
}