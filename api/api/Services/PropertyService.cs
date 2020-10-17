using api.DTOs;
using api.Interfaces;
using System;
using System.Collections.Generic;
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

        public void SaveProperty(IList<PropertyPhotoDTO> photoList)
        {
            this.propertyRepository.SaveProperty(photoList);
        }
    }
}
