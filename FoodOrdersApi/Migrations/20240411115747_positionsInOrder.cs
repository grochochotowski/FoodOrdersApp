using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FoodOrdersApi.Migrations
{
    /// <inheritdoc />
    public partial class positionsInOrder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "MealOrder");

            migrationBuilder.AddColumn<int>(
                name: "Positions",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Positions",
                table: "Orders");

            migrationBuilder.AddColumn<double>(
                name: "Price",
                table: "MealOrder",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
