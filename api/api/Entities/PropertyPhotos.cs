using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Entities
{
    public class PropertyPhotos
    {
        [Key]
        public int PropertyPhotoId { get; set; }
        public int? PropertyId { get; set; }
        public Byte[] Photo { get; set; }
    }
}
