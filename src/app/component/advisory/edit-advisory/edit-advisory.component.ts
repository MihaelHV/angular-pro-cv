import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Advisory } from 'src/app/models/advisory';
import { AdvisoryService } from 'src/app/services/advisory.service';

@Component({
  selector: 'app-edit-advisory',
  templateUrl: './edit-advisory.component.html',
  styleUrls: ['./edit-advisory.component.css']
})
export class EditAdvisoryComponent implements OnInit {

  myForm!: FormGroup;
  advisory!: Advisory;
  idAdvisory: any;

  constructor(
    private fb: FormBuilder,
    private advisoryService: AdvisoryService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
    this.loadAdvisory();
  }


  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      student: [''],
      service: [''],
      date: [new Date()],
     
    });
    }

  loadAdvisory() {
    this.idAdvisory = this.route.snapshot.paramMap.get('id');
    this.advisoryService.getAdvisory(this.idAdvisory).subscribe((data) => {
      this.advisory = data;
      this.myForm = this.fb.group({
        id: [this.advisory.id],
        student: [this.advisory.student],
        service: [this.advisory.service],
        date: [this.advisory.date],
       
      });
    });
  }

  updateAdvisory(): void {
    const advisory: Advisory = {
      id: this.idAdvisory,
      student: this.myForm.get('student')!.value,
      service: this.myForm.get('service')!.value,
      date: this.myForm.get('date')!.value,
    };
    this.advisoryService
      .updateAdvisory(this.idAdvisory, advisory)
      .subscribe({
        next: (data) => {
          this.snackBar.open('La sesoria fue actualizada con exito!', '', {
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
