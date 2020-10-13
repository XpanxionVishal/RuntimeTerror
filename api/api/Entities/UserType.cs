using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities
{
    public partial class UserType
    {
        [Key]
        public int UserTypeId { get; set; }
        [StringLength(256)]
        public string TypeName { get; set; }
    }
}
