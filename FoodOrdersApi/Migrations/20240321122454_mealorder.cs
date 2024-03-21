using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FoodOrdersApi.Migrations
{
    /// <inheritdoc />
    public partial class mealorder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MealOrder_Meals_MealsId",
                table: "MealOrder");

            migrationBuilder.DropForeignKey(
                name: "FK_MealOrder_Orders_OrdersId",
                table: "MealOrder");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MealOrder",
                table: "MealOrder");

            migrationBuilder.DropIndex(
                name: "IX_MealOrder_OrdersId",
                table: "MealOrder");

            migrationBuilder.RenameColumn(
                name: "OrdersId",
                table: "MealOrder",
                newName: "Quantity");

            migrationBuilder.RenameColumn(
                name: "MealsId",
                table: "MealOrder",
                newName: "OrderId");

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "MealOrder",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("Relational:ColumnOrder", 1);

            migrationBuilder.AddColumn<int>(
                name: "MealId",
                table: "MealOrder",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("Relational:ColumnOrder", 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_MealOrder",
                table: "MealOrder",
                columns: new[] { "MealId", "OrderId" });

            migrationBuilder.CreateIndex(
                name: "IX_MealOrder_OrderId",
                table: "MealOrder",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_MealOrder_Meals_MealId",
                table: "MealOrder",
                column: "MealId",
                principalTable: "Meals",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MealOrder_Orders_OrderId",
                table: "MealOrder",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MealOrder_Meals_MealId",
                table: "MealOrder");

            migrationBuilder.DropForeignKey(
                name: "FK_MealOrder_Orders_OrderId",
                table: "MealOrder");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MealOrder",
                table: "MealOrder");

            migrationBuilder.DropIndex(
                name: "IX_MealOrder_OrderId",
                table: "MealOrder");

            migrationBuilder.DropColumn(
                name: "MealId",
                table: "MealOrder");

            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "MealOrder",
                newName: "OrdersId");

            migrationBuilder.RenameColumn(
                name: "OrderId",
                table: "MealOrder",
                newName: "MealsId");

            migrationBuilder.AlterColumn<int>(
                name: "MealsId",
                table: "MealOrder",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("Relational:ColumnOrder", 1);

            migrationBuilder.AddPrimaryKey(
                name: "PK_MealOrder",
                table: "MealOrder",
                columns: new[] { "MealsId", "OrdersId" });

            migrationBuilder.CreateIndex(
                name: "IX_MealOrder_OrdersId",
                table: "MealOrder",
                column: "OrdersId");

            migrationBuilder.AddForeignKey(
                name: "FK_MealOrder_Meals_MealsId",
                table: "MealOrder",
                column: "MealsId",
                principalTable: "Meals",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MealOrder_Orders_OrdersId",
                table: "MealOrder",
                column: "OrdersId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
