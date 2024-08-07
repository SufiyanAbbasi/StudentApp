using programentoraspdotnetcore.Models;

namespace programentoraspdotnetcore.Data
{
    public class DummyData
    {
        public static List<Students> GetDummyStudents()
        {
            return new List<Students>
            {
                new Students { Id = 1, StudentName = "Alice Johnson", StudentGender = "Female", Age = "12", Standard = "6", FatherName = "David Johnson" },
                new Students { Id = 2, StudentName = "Bob Smith", StudentGender = "Male", Age = "13", Standard = "7", FatherName = "Michael Smith" },
                new Students { Id = 3, StudentName = "Alice Johnson", StudentGender = "Male", Age = "14", Standard = "8", FatherName = "Peter Brown" },
                new Students { Id = 4, StudentName = "Alice Johnson", StudentGender = "Female", Age = "12", Standard = "6", FatherName = "William Davis" },
                new Students { Id = 5,StudentName = "Alice Johnson", StudentGender = "Male", Age = "13", Standard = "7", FatherName = "Thomas Miller" }
            };
        }
    }
}
