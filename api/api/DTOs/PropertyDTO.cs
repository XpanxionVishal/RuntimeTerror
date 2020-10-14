using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class PropertyDTO
    {
        public int PropertyId { get; set; }
        public string PropertyType { get; set; }
        public string Area { get; set; }
        public string PostedBy { get; set; }
        public string Address { get; set; }
        public string OwnerName { get; set; }
        public decimal? CostPerDay { get; set; }
        public bool? IsOccupied { get; set; }
        public int? OccupiedBy { get; set; }
        public List<PropertyPhotoDTO> PropertyPhotos { get; set; }
    }
}
