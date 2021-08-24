import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { FertilizerService } from '../../services/fertilizer.service';

interface FertilizerType {
  name: string;
  code: string;
}

@Component({
  selector: 'app-updatefertilizer',
  templateUrl: './updatefertilizer.component.html',
  styleUrls: ['./updatefertilizer.component.css'],
})
export class UpdatefertilizerComponent implements OnInit {
  @Input() fertilizerId: any;
  updateForm: FormGroup;
  fertilizer: any = {};

  groupedCompanies: SelectItemGroup[];
  fertilizerTypes: FertilizerType[];

  constructor(
    private fertilizerService: FertilizerService,
    private fb: FormBuilder
  ) {
    this.updateForm = this.fb.group({
      pname: ['', Validators.required],
      comname: '',
      protype: '',
    });

    this.fertilizerTypes = [
      { name: 'Organic', code: 'NY' },
      { name: 'Inorganic', code: 'RM' },
    ];

    this.groupedCompanies = [
      {
        label: 'Organic',
        value: 'org',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' },
        ],
      },
      {
        label: 'Inorganic',
        value: 'inorg',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' },
        ],
      },
    ];
  }

  ngOnInit(): void {
    this.fertilizerService
      .getFertilizerById(this.fertilizerId)
      .subscribe((res) => {
        this.fertilizer = res;
      });
  }

  updateFertilizer(pname: any, comname: any, protype: any) {
    console.log(this.fertilizer);
    console.log(pname);
    console.log(comname);
    console.log(protype.name);
    console.log(protype);

    this.fertilizerService
      .updateFertilizer(this.fertilizerId, pname, comname, protype.name)
      .subscribe(() => {
        alert('The fertilizer updated successfully!!');
      });

    this.fertilizer.name = '';
    this.fertilizer.companyname = '';
    this.fertilizer.producttype = '';
  }
}
