using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities
{
    public partial class PropertyType
    {
        public PropertyType()
        {
            Property = new HashSet<Property>();
        }

        [Key]
        public int TypeId { get; set; }
        [StringLength(256)]
        public string TypeName { get; set; }

        [InverseProperty("PropertyType")]
        public virtual ICollection<Property> Property { get; set; }
    }
}
