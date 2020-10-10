using api.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;
using api.Interfaces;

namespace api.Repos
{
    public class MasterRepository: IMasterRepository
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
    }
}
