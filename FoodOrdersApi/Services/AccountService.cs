using FoodOrdersApi.Entities;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models.Account;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Xml;

namespace FoodOrdersApi.Services
{
    public interface IAccountService
    {
        void Register(RegisterDto dto);
    }

    public class AccountService : IAccountService
    {
        private readonly AppDbContext _context;
        private readonly IPasswordHasher<Account> _passwordHasher;

        public AccountService(AppDbContext context, IPasswordHasher<Account> passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
        }



        public void Register(RegisterDto dto)
        {
            var newAccount = new Account()
            {
                Login = dto.Login
            };

            if (dto.Password == dto.ConfirmPassword)
            {
                throw new Exception("Passwords do not match");
            }

            var hashedPassword = _passwordHasher.HashPassword(newAccount, dto.Password);

            newAccount.HashedPassword = hashedPassword;

            _context.Accounts.Add(newAccount);
            _context.SaveChanges();
        }
    }
}
