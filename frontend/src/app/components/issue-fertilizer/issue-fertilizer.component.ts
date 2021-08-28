import { Component, OnInit } from '@angular/core';
import { FarmerService } from 'src/app/services/farmer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-issue-fertilizer',
  templateUrl: './issue-fertilizer.component.html',
  styleUrls: ['./issue-fertilizer.component.css'],
})
export class IssueFertilizerComponent implements OnInit {
  farmers: any = [];
  createForm: FormGroup;

  text: string = '';

  results: any = [];
  filteredResults: any = [];

  constructor(private farmerService: FarmerService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      nic: '',
    });
  }

  ngOnInit() {
    this.fetchFarmers();
  }

  fetchFarmers() {
    this.farmerService.getFarmers().subscribe((data) => {
      this.farmers = data;
      console.log(this.farmers);
    });
  }

  submitHandle(nic: any) {
    console.log(nic);
  }

  search(event: any) {
    this.farmerService.getFarmers().subscribe((data) => {
      this.results = data;

      this.filteredResults = this.results.map((a: any) => a.nic);

      console.log(this.filteredResults);

      console.log();
    });
  }
}
