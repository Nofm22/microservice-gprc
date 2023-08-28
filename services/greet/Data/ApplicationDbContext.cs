
using Microsoft.EntityFrameworkCore;

namespace GrpcGreeter.Data;


public class ApplicationDbContext : DbContext
{



    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
    }
}