import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root',
})

export class StudentService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }

  getStudent(id: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  addStudent(student: any) {
    return this.http.post(baseUrl, student);
  }

  updateStudent(id: any, student: any) {
    return this.http.put(`${baseUrl}/${id}`, student);
  }

  deleteStudent(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}