using Microsoft.EntityFrameworkCore;

namespace FoodOrdersApi.Entities
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions<AppContext> options) : base(options) { }
    }
}
