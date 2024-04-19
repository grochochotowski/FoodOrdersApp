using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FoodOrdersApi.Migrations
{
    /// <inheritdoc />
    public partial class removeCOlumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "Organizations");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "Organizations",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
