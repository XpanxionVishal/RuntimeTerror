using api.DTOs;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers
{
    [ApiController]
    [Route("api/Master")]
    public class MasterController
    {
        private readonly IMasterService masterService;

        public MasterController(IMasterService masterService) 
        {
            this.masterService = masterService;
        }

        [HttpGet, Route("GetCities")]
        public List<CityDTO> GetCities()
        {
            return this.masterService.GetCities();
        }
    }
}
