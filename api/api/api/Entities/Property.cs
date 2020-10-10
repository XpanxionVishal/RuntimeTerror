using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities
{
    public partial class Property
    {
        [Key]
        public int PropertyId { get; set; }
        public int? PropertyTypeId { get; set; }
        public int? AreaId { get; set; }
        public int? PostedBy { get; set; }
        [StringLength(512)]
        public string Address { get; set; }
        [StringLength(256)]
        public string OwnerName { get; set; }
        [Column(TypeName = "decimal(18, 6)")]
        public decimal? CostPerDay { get; set; }
        public bool? IsOccupied { get; set; }
        public int? OccupiedBy { get; set; }

        [ForeignKey(nameof(AreaId))]
        [InverseProperty("Property")]
        public virtual Area Area { get; set; }
        [ForeignKey(nameof(OccupiedBy))]
        [InverseProperty(nameof(User.PropertyOccupiedByNavigation))]
        public virtual User OccupiedByNavigation { get; set; }
        [ForeignKey(nameof(PostedBy))]
        [InverseProperty(nameof(User.PropertyPostedByNavigation))]
        public virtual User PostedByNavigation { get; set; }
        [ForeignKey(nameof(PropertyTypeId))]
        [InverseProperty("Property")]
        public virtual PropertyType PropertyType { get; set; }
    }
}
