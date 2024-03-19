using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FoodOrdersApi.Migrations
{
    /// <inheritdoc />
    public partial class fixDoubleFK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Meals_Restaurants_RestaurantId1",
                table: "Meals");

            migrationBuilder.DropIndex(
                name: "IX_Meals_RestaurantId1",
                table: "Meals");

            migrationBuilder.DropColumn(
                name: "RestaurantId1",
                table: "Meals");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RestaurantId1",
                table: "Meals",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Meals_RestaurantId1",
                table: "Meals",
                column: "RestaurantId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Meals_Restaurants_RestaurantId1",
                table: "Meals",
                column: "RestaurantId1",
                principalTable: "Restaurants",
                principalColumn: "Id");
        }
    }
}
