import { Injectable } from '@angular/core';
import { Student } from '../Student';
import { Observable, of } from 'rxjs';
import { STUDENTS } from '../mock-students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() { }

  getStudents(): Observable<Student[]> {
    const students = of(STUDENTS);
    return students;  
  }
}
