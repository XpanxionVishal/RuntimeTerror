using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class AreaDTO
    {
        public int AreaId { get; set; }
        public string AreaName { get; set; }
        public int? CityId { get; set; }
    }
}
