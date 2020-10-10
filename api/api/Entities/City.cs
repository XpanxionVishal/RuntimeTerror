using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities
{
    public partial class City
    {
        public City()
        {
            Area = new HashSet<Area>();
        }

        [Key]
        public int CityId { get; set; }
        [StringLength(256)]
        public string CityName { get; set; }

        [InverseProperty("City")]
        public virtual ICollection<Area> Area { get; set; }
    }
}
