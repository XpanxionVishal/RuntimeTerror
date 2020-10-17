using api.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Interfaces
{
    public interface IPropertyService
    {
        List<PropertyDTO> GetProperties();
        void SaveProperty(IList<PropertyPhotoDTO> photoList);
    }
}
