using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class PropertyPhotoDTO
    {
        public int PropertyPhotoId { get; set; }
        public int? PropertyId { get; set; }
        public Byte[] Photo { get; set; }
    }
}
