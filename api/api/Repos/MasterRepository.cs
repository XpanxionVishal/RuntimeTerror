using api.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;
using api.Interfaces;

namespace api.Repos
{
    public class MasterRepository : IMasterRepository
    {
        private readonly APIDBContext apiContext;

        public MasterRepository(APIDBContext apiContext)
        {
            this.apiContext = apiContext;
        }

        public List<CityDTO> GetCities()
        {
            return (from c in this.apiContext.City
                    select new CityDTO()
                    {
                        CityId = c.CityId,
                        CityName = c.CityName
                    }
                ).ToList();
        }

        public List<AreaDTO> GetAreas(int cityId)
        {
            return (from a in this.apiContext.Area
                    where a.CityId == cityId
                    select new AreaDTO()
                    {
                        AreaId = a.AreaId,
                        AreaName = a.AreaName,
                        CityId = cityId
                    }).ToList();
        }

        public List<PropertyTypeDTO> GetPropertyTypes()
        {
            return (from pt in this.apiContext.PropertyType
                    select new PropertyTypeDTO()
                    {
                        TypeId = pt.TypeId,
                        TypeName = pt.TypeName
                    }).ToList();
        }
    }
}
