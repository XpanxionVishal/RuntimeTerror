using api.DTOs;
using api.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;

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

        [HttpPost, Route("SaveProperty")]
        public void SaveProperty([FromForm(Name = "file.png")] List<IFormFile> file)
        {
            List<PropertyPhotoDTO> propertyPhotos = new List<PropertyPhotoDTO>();

            file.ForEach(f =>
            {
                using (var stream = new MemoryStream())
                {
                    PropertyPhotoDTO photo = new PropertyPhotoDTO();
                    byte[] byteFile = null;
                    f.CopyTo(stream);
                    byteFile = stream.ToArray();
                    photo.Photo = byteFile;
                    photo.PropertyId = 1;
                    photo.PropertyPhotoId = 1;
                    propertyPhotos.Add(photo);
                }
            });

            this.propertyService.SaveProperty(propertyPhotos);
        }
    }
}
