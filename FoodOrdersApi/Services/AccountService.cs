﻿using FoodOrdersApi.Entities;
using FoodOrdersApi.Entities.Objects;
using FoodOrdersApi.Models.Account;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Xml;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace FoodOrdersApi.Services
{
    public interface IAccountService
    {
        void Register(RegisterDto dto);
        string GenerateToken(LoginDto dto);
    }

    public class AccountService : IAccountService
    {
        private readonly AppDbContext _context;
        private readonly IPasswordHasher<Account> _passwordHasher;
        private readonly AuthenticationSettings _authenticationSettings;

        public AccountService(AppDbContext context, IPasswordHasher<Account> passwordHasher, AuthenticationSettings authenticationSettings)
        {
            _context = context;
            _passwordHasher = passwordHasher;
            _authenticationSettings = authenticationSettings;
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

        public string GenerateToken(LoginDto dto)
        {
            var account = _context.Accounts.FirstOrDefault(a => a.Login == dto.Login);

            if (account is null)
            {
                return "Login or password is incorrect";
            }

            var hashedPassword = _passwordHasher.VerifyHashedPassword(account, account.HashedPassword, dto.Password);
            if(hashedPassword == PasswordVerificationResult.Failed)
            {
                return "Login or password is incorrect";
            }

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, account.Id.ToString()),
                new Claim(ClaimTypes.Name, $"{account.Login}")
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authenticationSettings.JwtKey));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(_authenticationSettings.JwtExpireDays);

            var token = new JwtSecurityToken(
                _authenticationSettings.JwtIssuer,
                _authenticationSettings.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: cred );

            var tokenHandler = new JwtSecurityTokenHandler();

            return tokenHandler.WriteToken(token);
        }
    }
}
