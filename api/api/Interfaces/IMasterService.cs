using api.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Interfaces
{
    public interface IMasterService
    {
        List<CityDTO> GetCities();
        List<AreaDTO> GetAreas(int cityId);
        List<PropertyTypeDTO> GetPropertyTypes();
    }
}
