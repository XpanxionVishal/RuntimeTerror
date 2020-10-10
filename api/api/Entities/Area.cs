using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities
{
    public partial class Area
    {
        public Area()
        {
            Property = new HashSet<Property>();
        }

        [Key]
        public int AreaId { get; set; }
        [StringLength(256)]
        public string AreaName { get; set; }
        public int? CityId { get; set; }

        [ForeignKey(nameof(CityId))]
        [InverseProperty("Area")]
        public virtual City City { get; set; }
        [InverseProperty("Area")]
        public virtual ICollection<Property> Property { get; set; }
    }
}
