import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css'],
})
export class ListTeacherComponent implements OnInit {
  displayedColumns: string[] = [
    'idTeacher',
    'firstName',
    'lastName',
    'dni',
    'email',
    'cellphone',
    'actions',
  ];
  dataSource = new MatTableDataSource<Teacher>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private teacherService: TeacherService) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getTeachers();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTeachers(): void {
    this.teacherService.getTeachers().subscribe({
      next: (data: Teacher[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  deleteTeacher(id: number): void {
    this.teacherService.deleteTeacher(id).subscribe({
      next: () => {
        this.getTeachers();
      },
    });
  }
}
