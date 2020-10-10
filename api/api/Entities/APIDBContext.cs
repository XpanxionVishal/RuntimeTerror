using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace api.Entities
{
    public partial class APIDBContext : DbContext
    {
        public APIDBContext()
        {
        }

        public APIDBContext(DbContextOptions<APIDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Area> Area { get; set; }
        public virtual DbSet<City> City { get; set; }
        public virtual DbSet<Property> Property { get; set; }
        public virtual DbSet<PropertyType> PropertyType { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserType> UserType { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.;Database=RuntimeTerror;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Area>(entity =>
            {
                entity.HasOne(d => d.City)
                    .WithMany(p => p.Area)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("FK__Area__CityId__412EB0B6");
            });

            modelBuilder.Entity<Property>(entity =>
            {
                entity.HasOne(d => d.Area)
                    .WithMany(p => p.Property)
                    .HasForeignKey(d => d.AreaId)
                    .HasConstraintName("FK__Property__AreaId__46E78A0C");

                entity.HasOne(d => d.OccupiedByNavigation)
                    .WithMany(p => p.PropertyOccupiedByNavigation)
                    .HasForeignKey(d => d.OccupiedBy)
                    .HasConstraintName("FK__Property__Occupi__48CFD27E");

                entity.HasOne(d => d.PostedByNavigation)
                    .WithMany(p => p.PropertyPostedByNavigation)
                    .HasForeignKey(d => d.PostedBy)
                    .HasConstraintName("FK__Property__Posted__47DBAE45");

                entity.HasOne(d => d.PropertyType)
                    .WithMany(p => p.Property)
                    .HasForeignKey(d => d.PropertyTypeId)
                    .HasConstraintName("FK__Property__Proper__45F365D3");
            });

            modelBuilder.Entity<PropertyType>(entity =>
            {
                entity.HasKey(e => e.TypeId)
                    .HasName("PK__Property__516F03B5A74313B0");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Email)
                    .HasName("UQ__User__A9D10534D85E2EAF")
                    .IsUnique();

                entity.HasOne(d => d.UserTypeNavigation)
                    .WithMany(p => p.User)
                    .HasForeignKey(d => d.UserTypeId)
                    .HasConstraintName("FK__User__UserType__3C69FB99");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
