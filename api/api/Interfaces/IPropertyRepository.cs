using api.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Interfaces
{
    public interface IPropertyRepository
    {
        List<PropertyDTO> GetProperties(int areaId, int propertyTypeId);
        void SaveProperty(IList<PropertyPhotoDTO> photoList, PropertyDTO property);
    }
}
