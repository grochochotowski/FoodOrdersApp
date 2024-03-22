using FoodOrdersApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace shop_system
{
    public class DBSeeder
    {
        private readonly AppDbContext _context;

        public DBSeeder(AppDbContext context)
        {
            _context = context;
        }

        public void Seed()
        {
            if (_context.Database.CanConnect())
            {
                var pendidngMigrations = _context.Database.GetPendingMigrations();
                if (pendidngMigrations != null && pendidngMigrations.Any())
                {
                    _context.Database.Migrate();
                }
            }
        }
    }
}