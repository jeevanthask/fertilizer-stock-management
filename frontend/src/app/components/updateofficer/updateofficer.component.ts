import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficerService } from '../../services/officer.service';

interface OfficerType {
  name: string;
  code: string;
}

@Component({
  selector: 'app-updateofficer',
  templateUrl: './updateofficer.component.html',
  styleUrls: ['./updateofficer.component.css'],
})
export class UpdateofficerComponent implements OnInit {
  @Input() officerId: any;
  officer: any = {};
  officerTypes: OfficerType[];

  updateForm: FormGroup;

  constructor(private officerService: OfficerService, private fb: FormBuilder) {
    this.officerTypes = [
      { name: 'officertype01', code: 'NY' },
      { name: 'officertype02', code: 'RM' },
      { name: 'officertype03', code: 'EE' },
    ];

    this.updateForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      position: '',
    });
  }

  ngOnInit(): void {
    this.officerService.getOfficerById(this.officerId).subscribe((res) => {
      this.officer = res;
    });
  }

  updateOfficer(firstname: any, secondname: any, position: any) {
    console.log('update officer clicked');

    console.log(firstname);
    console.log(secondname);
    console.log(position);

    this.officerService
      .updateOfficer(this.officerId, firstname, secondname, position.name)
      .subscribe(() => {
        alert('The officer updated successfully!!');
      });

    this.officer.firstname = '';
    this.officer.secondname = '';
    this.officer.position = '';
  }
}
