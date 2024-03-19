using FoodOrdersApi.Entities.Objects;
using Microsoft.EntityFrameworkCore;

namespace FoodOrdersApi.Entities
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<Meal> Meals { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Org> Organizations { get; set; }
        public DbSet<Address> Addresses { get; set; }




        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Meal>()
                .HasOne(m => m.Restaurant)
                .WithMany(r => r.Meals)
                .HasForeignKey(m => m.RestaurantId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Cart>()
                .HasOne(c => c.Restaurant)
                .WithMany()
                .HasForeignKey(c => c.RestaurantId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
