using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities
{
    public partial class Area
    {
        [Key]
        public int AreaId { get; set; }
        [StringLength(256)]
        public string AreaName { get; set; }
        public int? CityId { get; set; }
    }
}
