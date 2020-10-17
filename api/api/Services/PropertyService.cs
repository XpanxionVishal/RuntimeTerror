using api.DTOs;
using api.Interfaces;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace api.Services
{
    public class PropertyService: IPropertyService
    {
        private readonly IPropertyRepository propertyRepository;

        public PropertyService(IPropertyRepository propertyRepository)
        {
            this.propertyRepository = propertyRepository;
        }

        public List<PropertyDTO> GetProperties()
        {
            return this.propertyRepository.GetProperties();
        }

        public void SaveProperty(List<IFormFile> photoList, PropertyDTO property)
        {
            List<PropertyPhotoDTO> propertyPhotos = new List<PropertyPhotoDTO>();
            photoList.ForEach(f =>
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

            this.propertyRepository.SaveProperty(propertyPhotos, property);
        }
    }
}
