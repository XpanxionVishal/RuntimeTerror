using api.DTOs;
using api.Entities;
using api.Interfaces;
using System;
using System.Collections.Generic;
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

        public List<PropertyDTO> GetProperties()
        {
            List<PropertyDTO> property = new List<PropertyDTO>();
            property = (from p in this.apiContext.Property
                        join pt in this.apiContext.PropertyType on p.PropertyTypeId equals pt.TypeId
                        join a in this.apiContext.Area on p.AreaId equals a.AreaId
                        join u1 in this.apiContext.User on p.PostedBy equals u1.UserId
                        //join u2 in this.apiContext.User on p.AreaId equals a.AreaId
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
    }
}
