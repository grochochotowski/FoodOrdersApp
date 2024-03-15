using Microsoft.EntityFrameworkCore;

namespace FoodOrdersApi.Entities
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}
