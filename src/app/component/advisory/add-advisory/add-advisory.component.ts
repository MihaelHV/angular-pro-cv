import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Advisory } from 'src/app/models/advisory';
import { AdvisoryService } from 'src/app/services/advisory.service';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-add-advisory',
  templateUrl: './add-advisory.component.html',
  styleUrls: ['./add-advisory.component.css']
})
export class AddAdvisoryComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private advisoryService: AdvisoryService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      student: [''],
      service: [''],
      date: [new Date()],
     
    });
  }

  saveAdvisory(): void {
    const advisory: Advisory = {
      id: 0,
      student: this.myForm.get('student')!.value,
      service: this.myForm.get('service')!.value,
      date: this.myForm.get('date')!.value,
     
    };
    this.advisoryService.addAdvisory(advisory).subscribe({
      next: (data) => {
        this.snackBar.open('La asesoria fue registrada con exito!', '', {
          duration: 6000,
        });
        this.router.navigate(['/advisories']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
