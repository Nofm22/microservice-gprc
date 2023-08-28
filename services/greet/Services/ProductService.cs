using Grpc.Core;
using GrpcGreeter.Data;
using GrpcGreeter.Models;
using Microsoft.AspNetCore.Mvc;

namespace GrpcGreeter.Services;
public class ProductBaseService : ProductService.ProductServiceBase
{

    private readonly ApplicationDbContext _context;

    public ProductBaseService(ApplicationDbContext context)
    {
        _context = context;
    }

    public override async Task<CreateProductResponse> CreateProduct(CreateProductRequest request, ServerCallContext context)
    {
        try
        {
            var product = new Product
            {
                ProductName = request.ProductName,
                Quantity = request.Quantity,
            };
            await _context.Product.AddAsync(product);
            await _context.SaveChangesAsync();

            var response = new CreateProductResponse
            {
                Status = "Success",
                Error = "none"
            };

            return response;
        }
        catch (Exception e)
        {
            var response = new CreateProductResponse
            {
                Status = "Success",
                Error = e.Message
            };

            return response;


        }


    }
}