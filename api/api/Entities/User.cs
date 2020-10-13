using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities
{
    public partial class User
    {
        [Key]
        public int UserId { get; set; }
        [StringLength(256)]
        public string Name { get; set; }
        [StringLength(256)]
        public string Email { get; set; }
        public int? UserTypeId { get; set; }
    }
}
