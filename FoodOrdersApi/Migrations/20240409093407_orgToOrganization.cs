using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FoodOrdersApi.Migrations
{
    /// <inheritdoc />
    public partial class orgToOrganization : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OrganizationId",
                table: "Carts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Carts_OrganizationId",
                table: "Carts",
                column: "OrganizationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Carts_Organizations_OrganizationId",
                table: "Carts",
                column: "OrganizationId",
                principalTable: "Organizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Carts_Organizations_OrganizationId",
                table: "Carts");

            migrationBuilder.DropIndex(
                name: "IX_Carts_OrganizationId",
                table: "Carts");

            migrationBuilder.DropColumn(
                name: "OrganizationId",
                table: "Carts");
        }
    }
}
