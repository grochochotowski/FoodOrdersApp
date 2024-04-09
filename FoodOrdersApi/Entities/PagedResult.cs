namespace FoodOrdersApi.Entities
{
    public class PagedResult<T>
    {
        public List<T> Items { get; set; }
        public int TotalPages { get; set; }
        public int ItemFrom { get; set; }
        public int ItemTo { get; set; }
        public int totalItemsCount { get; set; }

        public PagedResult(List<T> items, int totalCount, int page)
        {
            Items = items;
            totalItemsCount = totalCount;
            ItemFrom = 10 * (page - 1) + 1;
            TotalPages = (int)Math.Ceiling( totalCount / (double)10 );
        }

    }
}
