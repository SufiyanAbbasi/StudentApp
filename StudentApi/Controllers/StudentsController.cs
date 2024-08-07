﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using programentoraspdotnetcore.Models;

namespace programentoraspdotnetcore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentDBContext context;

        public StudentsController(StudentDBContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task <ActionResult<List<Students>>> GetStudents()
        {
            var data = await context.Students.ToListAsync();
            return Ok(data);

            //for dummy data
            //var data = DummyData.GetDummyStudents();
            //return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Students>> GetStudentsById(int id)
        {
            var student =await context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }
            return student;
        }

        [HttpPost]
        public async Task<ActionResult<Students>> CreateStudent(Students std)
        {
           await context.Students.AddAsync(std);
           await context.SaveChangesAsync();

           return Ok(std);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Students>> UpdateStudent(Students std, int id)
        {
            if(id != std.Id)
            {
                return BadRequest();
            }
            context.Entry(std).State = EntityState.Modified;
            await context.SaveChangesAsync();

            return Ok(std); 
        }

        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Students>> DeleteStudent( int id)
        //{
        //    var std = await context.Students.FindAsync();

        //    if(std == null)
        //    {
        //        return NotFound();
        //    }

        //    context.Students.Remove(std);

        //    await context.SaveChangesAsync();
        //    return Ok(std);
        //}

        [HttpDelete("{id}")]
        public async Task<ActionResult<Students>> DeleteStudent(int id)
        {
            var std = await context.Students.FindAsync(id);

            if (std == null)
            {
                return NotFound();
            }

            context.Students.Remove(std);
            await context.SaveChangesAsync();

            return Ok(std);
        }


    }
}
