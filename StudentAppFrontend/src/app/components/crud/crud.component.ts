import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Students } from '../../models/students';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule,  FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  title = 'StudentAppFrontend';
  isEditing: boolean = false;

  students: Students[] = [];

  student: Students = {
    id: 0,
    studentName: '',
    fatherName: '',
    age: '',
    studentGender: "",
    standard: '',
  }
  constructor(private apiSrv: ApiService) { }

  ngOnInit(): void {
    this.allStudents();

  }

  allStudents() {
    this.apiSrv.getAllStudents().subscribe((data) => {
      this.students = data;
    })
  }

  edit(stud: Students): void {
    this.student = { ...stud };
    this.isEditing = true;
  }

  delete(id: number): void {
    if (confirm('Are You Sure YOu want to delete?')) {
      this.apiSrv.deleteStudent(id).subscribe(() => {
        this.allStudents();
      });
    }
  }

  addStudent(): void {
    if (this.isEditing) {
      this.apiSrv.updateStudent(this.student.id, this.student).subscribe(() => {
        this.allStudents(); // Refresh the list after update
        this.reset(); // Reset the form
      });
    } else {
      this.apiSrv.createStudent(this.student).subscribe(() => {
        this.allStudents();; // Refresh the list after creation
        this.reset(); // Reset the form
      });
    }
  }
  reset(): void {
    this.student = {
      id: 0,
      studentName: '',
      fatherName: '',
      age: '',
      studentGender: '',
      standard: ''
    };
    this.isEditing = false;
  }
}
