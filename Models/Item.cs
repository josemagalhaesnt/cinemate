namespace Cinemate.Models
{
    public class Item
    {
        public Item(int id, string title, DateTimeOffset releaseDate, string? originalTitle, string? posterUrl)
        {
            Id = id;
            Title = title;
            ReleaseDate = releaseDate;
            OriginalTitle = originalTitle;
            PosterUrl = posterUrl;
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public DateTimeOffset ReleaseDate { get; set; }
        public string? OriginalTitle { get; set; }
        public string? PosterUrl { get; set; }

    }
}
