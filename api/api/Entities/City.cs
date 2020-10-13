using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities
{
    public partial class City
    {
        [Key]
        public int CityId { get; set; }
        [StringLength(256)]
        public string CityName { get; set; }
    }
}
