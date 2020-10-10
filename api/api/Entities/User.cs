using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities
{
    public partial class User
    {
        public User()
        {
            PropertyOccupiedByNavigation = new HashSet<Property>();
            PropertyPostedByNavigation = new HashSet<Property>();
        }

        [Key]
        public int UserId { get; set; }
        [StringLength(256)]
        public string Name { get; set; }
        [StringLength(256)]
        public string Email { get; set; }
        public int? UserTypeId { get; set; }

        [ForeignKey(nameof(UserType))]
        [InverseProperty(nameof(UserType.User))]
        public virtual UserType UserTypeNavigation { get; set; }
        [InverseProperty(nameof(Property.OccupiedByNavigation))]
        public virtual ICollection<Property> PropertyOccupiedByNavigation { get; set; }
        [InverseProperty(nameof(Property.PostedByNavigation))]
        public virtual ICollection<Property> PropertyPostedByNavigation { get; set; }
    }
}
