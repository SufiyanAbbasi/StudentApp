import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../models/students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://localhost:7165/api/Students"
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(this.baseUrl);
  }


  // Get a single student by ID
  getStudentById(id: number): Observable<Students> {
    return this.http.get<Students>(`${this.baseUrl}/${id}`);
  }

  // Create a new student
  createStudent(student: Students): Observable<Students> {
    return this.http.post<Students>(this.baseUrl, student);
  }

  //update a new student
  updateStudent(id: number, student: Students): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, student);
  }

  //delete a student
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }





}
