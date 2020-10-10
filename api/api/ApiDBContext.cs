using Microsoft.EntityFrameworkCore;
using USTGlobal.PIP.ApplicationCore.Entities;

namespace USTGlobal.PIP.Infrastructure.Data
{
    public partial class APIDBContext : DbContext
    {
        private readonly string connectionString;

        public APIDBContext()
        {
        }

        public APIDBContext(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public APIDBContext(DbContextOptions<PipContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}
