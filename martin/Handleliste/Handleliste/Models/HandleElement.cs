using System.ComponentModel.DataAnnotations;

namespace Handleliste.Models
{
    public class HandleElement
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public bool IsChecked { get; set; }



    }
}
