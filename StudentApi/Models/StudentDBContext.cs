using Microsoft.EntityFrameworkCore;

namespace programentoraspdotnetcore.Models
{
    public class StudentDBContext : DbContext
    {
        public StudentDBContext(DbContextOptions <StudentDBContext> options) : base(options)
        {
            
        }
       public  DbSet<Students> Students { get; set; }
    }
}
