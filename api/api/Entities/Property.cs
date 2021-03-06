﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities
{
    public class Property
    {
        [Key]
        public int PropertyId { get; set; }
        public int? PropertyTypeId { get; set; }
        public int? AreaId { get; set; }
        public int? PostedBy { get; set; }
        public string Address { get; set; }
        public string OwnerName { get; set; }
        public decimal? CostPerDay { get; set; }
        public bool? IsOccupied { get; set; }
        public int? OccupiedBy { get; set; }
    }
}
