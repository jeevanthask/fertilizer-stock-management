import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficerService } from '../../services/officer.service';

interface OfficerType {
  name: string;
  code: string;
}

@Component({
  selector: 'app-addofficers',
  templateUrl: './addofficers.component.html',
  styleUrls: ['./addofficers.component.css'],
})
export class AddofficersComponent implements OnInit {
  createForm: FormGroup;
  officerTypes: OfficerType[];
  displayModal: boolean = false;

  constructor(private officerService: OfficerService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      position: '',
    });

    this.officerTypes = [
      { name: 'Management Assistant', code: 'NY' },
      { name: 'Development Officer', code: 'RM' },
    ];
  }

  addOfficer(firstname: any, secondname: any, position: any) {
    console.log(firstname);
    console.log(secondname);
    console.log(position);

    this.officerService
      .addOfficer(firstname, secondname, position.name)
      .subscribe(() => {
        this.displayModal = true;
      });

    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      position: '',
    });
  }

  ngOnInit(): void {}
}
