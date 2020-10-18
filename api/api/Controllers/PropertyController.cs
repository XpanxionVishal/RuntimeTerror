using api.DTOs;
using api.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace api.Controllers
{
    [ApiController]
    [Route("api/Property")]
    public class PropertyController : ControllerBase
    {
        private readonly IPropertyService propertyService;

        public PropertyController(IPropertyService propertyService)
        {
            this.propertyService = propertyService;
        }

        [HttpGet, Route("GetProperties/{areaId}/{propertyTypeId}")]
        public List<PropertyDTO> GetProperties(int areaId, int propertyTypeId)
        {
            return this.propertyService.GetProperties(areaId, propertyTypeId);
        }

        [HttpPost, Route("SaveProperty")]
        public void SaveProperty([FromForm(Name = "file.png")] List<IFormFile> filesList, [FromForm(Name = "property")] string property)
        {
            PropertyDTO propertyDTO = new PropertyDTO();
            var jsonObject = Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>(property);

            propertyDTO.AreaId = (int)jsonObject["areaId"].Value;
            propertyDTO.Address = jsonObject["address"].Value;
            propertyDTO.CostPerDay = (decimal)jsonObject["costPerDay"].Value;
            propertyDTO.OwnerName = jsonObject["ownerName"].Value;
            propertyDTO.PostedByUserId = Convert.ToInt32(jsonObject["postedByUserId"].Value);
            propertyDTO.PropertyTypeId = (int)jsonObject["propertyTypeId"].Value;

            this.propertyService.SaveProperty(filesList, propertyDTO);
        }

        [HttpPut, Route("BookProperty")]
        public void BookProperty([FromBody] PropertyDTO property)
        {
            this.propertyService.BookProperty((property.OccupiedBy ?? 0), property.PropertyId);
        }
    }
}
