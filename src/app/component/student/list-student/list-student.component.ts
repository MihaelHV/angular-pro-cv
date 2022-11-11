import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  displayedColumns: string[] = [
    'idStudent',
    'firstName',
    'lastName',
    'dni',
    'email',
    'cellphone',
    'actions',
  ];
  dataSource = new MatTableDataSource<Student>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private studentService: StudentService) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getStudents();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data: Student[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe({
      next: () => {
        this.getStudents();
      },
    });
  }


}
