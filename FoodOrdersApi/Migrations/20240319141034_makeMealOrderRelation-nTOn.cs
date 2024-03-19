using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FoodOrdersApi.Migrations
{
    /// <inheritdoc />
    public partial class makeMealOrderRelationnTOn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Carts_Restaurants_RestaurantId",
                table: "Carts");

            migrationBuilder.DropForeignKey(
                name: "FK_Meals_Orders_OrderId",
                table: "Meals");

            migrationBuilder.DropForeignKey(
                name: "FK_Meals_Restaurants_RestaurantId",
                table: "Meals");

            migrationBuilder.RenameColumn(
                name: "OrderId",
                table: "Meals",
                newName: "RestaurantId1");

            migrationBuilder.RenameIndex(
                name: "IX_Meals_OrderId",
                table: "Meals",
                newName: "IX_Meals_RestaurantId1");

            migrationBuilder.CreateTable(
                name: "MealOrder",
                columns: table => new
                {
                    MealsId = table.Column<int>(type: "int", nullable: false),
                    OrdersId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MealOrder", x => new { x.MealsId, x.OrdersId });
                    table.ForeignKey(
                        name: "FK_MealOrder_Meals_MealsId",
                        column: x => x.MealsId,
                        principalTable: "Meals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MealOrder_Orders_OrdersId",
                        column: x => x.OrdersId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MealOrder_OrdersId",
                table: "MealOrder",
                column: "OrdersId");

            migrationBuilder.AddForeignKey(
                name: "FK_Carts_Restaurants_RestaurantId",
                table: "Carts",
                column: "RestaurantId",
                principalTable: "Restaurants",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Meals_Restaurants_RestaurantId",
                table: "Meals",
                column: "RestaurantId",
                principalTable: "Restaurants",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Meals_Restaurants_RestaurantId1",
                table: "Meals",
                column: "RestaurantId1",
                principalTable: "Restaurants",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Carts_Restaurants_RestaurantId",
                table: "Carts");

            migrationBuilder.DropForeignKey(
                name: "FK_Meals_Restaurants_RestaurantId",
                table: "Meals");

            migrationBuilder.DropForeignKey(
                name: "FK_Meals_Restaurants_RestaurantId1",
                table: "Meals");

            migrationBuilder.DropTable(
                name: "MealOrder");

            migrationBuilder.RenameColumn(
                name: "RestaurantId1",
                table: "Meals",
                newName: "OrderId");

            migrationBuilder.RenameIndex(
                name: "IX_Meals_RestaurantId1",
                table: "Meals",
                newName: "IX_Meals_OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_Carts_Restaurants_RestaurantId",
                table: "Carts",
                column: "RestaurantId",
                principalTable: "Restaurants",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Meals_Orders_OrderId",
                table: "Meals",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Meals_Restaurants_RestaurantId",
                table: "Meals",
                column: "RestaurantId",
                principalTable: "Restaurants",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
