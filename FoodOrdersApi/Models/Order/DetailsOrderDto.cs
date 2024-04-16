﻿namespace FoodOrdersApi.Models.Order
{
    public class DetailsOrderDto
    {
        public int Id { get; set; }
        public double TotalPrice { get; set; }
        public int Positions { get; set; }
        public string? Notes { get; set; }


        public string Restaurant { get; set; }
        public string Organization { get; set; }


        public string User { get; set; }
    }
}