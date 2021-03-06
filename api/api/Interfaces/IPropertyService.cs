﻿using api.DTOs;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Interfaces
{
    public interface IPropertyService
    {
        List<PropertyDTO> GetProperties(int areaId, int propertyTypeId);
        void SaveProperty(List<IFormFile> photoList, PropertyDTO property);
        void BookProperty(int bookedByUserId, int propertyId);
    }
}
