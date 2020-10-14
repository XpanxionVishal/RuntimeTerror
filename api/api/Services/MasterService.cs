using api.DTOs;
using api.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Services
{
    public class MasterService: IMasterService
    {
        private readonly IMasterRepository masterRepository;

        public MasterService(IMasterRepository masterRepository)
        {
            this.masterRepository = masterRepository;
        }

        public List<CityDTO> GetCities()
        {
            return masterRepository.GetCities(); ;
        }

        public List<AreaDTO> GetAreas(int cityId)
        {
            return masterRepository.GetAreas(cityId);
        }

        public List<PropertyTypeDTO> GetPropertyTypes()
        {
            return masterRepository.GetPropertyTypes();
        }
    }
}
