﻿using api.DTOs;
using api.Entities;
using api.Helpers;
using api.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace api.Repos
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly APIDBContext apiContext;

        public PropertyRepository(APIDBContext apiContext)
        {
            this.apiContext = apiContext;
        }

        public List<PropertyDTO> GetProperties(int areaId, int propertyTypeId)
        {
            List<PropertyDTO> property = new List<PropertyDTO>();
            property = (from p in this.apiContext.Property
                        join pt in this.apiContext.PropertyType on p.PropertyTypeId equals pt.TypeId
                        join a in this.apiContext.Area on p.AreaId equals a.AreaId
                        join c in this.apiContext.City on a.CityId equals c.CityId
                        join u1 in this.apiContext.User on p.PostedBy equals u1.UserId
                        //join u2 in this.apiContext.User on p.AreaId equals a.AreaId
                        where p.AreaId == areaId && p.PropertyTypeId == propertyTypeId && p.IsOccupied == false
                        select new PropertyDTO
                        {
                            PropertyId = p.PropertyId,
                            PropertyType = pt.TypeName,
                            Area = a.AreaName,
                            Address = p.Address,
                            CostPerDay = p.CostPerDay,
                            PostedBy = u1.Name,
                            IsOccupied = p.IsOccupied,
                            OwnerName = p.OwnerName,
                            City = c.CityName,
                            AreaId = p.AreaId ?? 0,
                            PropertyTypeId = p.PropertyTypeId ?? 0,
                            PostedByUserId = p.PostedBy ?? 0,
                            PropertyPhotos = (from photo in this.apiContext.PropertyPhotos
                                              where photo.PropertyId == p.PropertyId
                                              select new PropertyPhotoDTO
                                              {
                                                  PropertyId = p.PropertyId,
                                                  Photo = photo.Photo,
                                                  PropertyPhotoId = photo.PropertyPhotoId
                                              }).ToList()
                        }).ToList();
            return property;
        }

        public void SaveProperty(IList<PropertyPhotoDTO> photoList, PropertyDTO property)
        {
            apiContext.Database.ExecuteSqlRaw(" exec dbo.sp_SaveProperty {0}, {1}, {2}, {3}, {4}, {5}, {6}",
            new SqlParameter("@InputPhotos", SqlDbType.Structured)
            {
                Value = IListToDataTableHelper.ToDataTables(photoList),
                TypeName = "dbo.PropertyPhotos"
            },
            property.PropertyTypeId,
            property.AreaId,
            property.PostedByUserId,
            property.Address,
            property.OwnerName,
            property.CostPerDay
            );
        }

        public void BookProperty(int bookedByUserId, int propertyId)
        {
            Property property = (from p in this.apiContext.Property where p.PropertyId == propertyId select p).FirstOrDefault();

            property.IsOccupied = true;
            property.OccupiedBy = bookedByUserId;
            this.apiContext.SaveChanges();
        }
    }
}
