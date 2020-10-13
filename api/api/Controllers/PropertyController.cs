using api.DTOs;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers
{
    [ApiController]
    [Route("api/Property")]
    public class PropertyController
    {
        private readonly IPropertyService propertyService;

        public PropertyController(IPropertyService propertyService)
        {
            this.propertyService = propertyService;
        }

        [HttpGet, Route("GetProperties")]
        public List<PropertyDTO> GetProperties()
        {
            return this.propertyService.GetProperties();
        }
    }
}
