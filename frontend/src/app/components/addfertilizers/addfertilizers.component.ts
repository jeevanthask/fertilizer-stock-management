import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FertilizerService} from "../../services/fertilizer.service";
import {SelectItem, SelectItemGroup} from "primeng/api";


interface FertilizerType {
  name: string,
  code: string
}

@Component({
  selector: 'app-addfertilizers',
  templateUrl: './addfertilizers.component.html',
  styleUrls: ['./addfertilizers.component.css']
})



export class AddfertilizersComponent implements OnInit {

  createForm: FormGroup;

  groupedCompanies: SelectItemGroup[];
  fertilizerTypes: FertilizerType[];

  constructor(private fertilizerService: FertilizerService, private fb: FormBuilder) {

    this.createForm = this.fb.group({
      pname: ['', Validators.required],
      comname: '',
      protype: ''
    });

    this.fertilizerTypes = [
      {name: 'Organic', code: 'NY'},
      {name: 'Inorganic', code: 'RM'}
    ];

    this.groupedCompanies = [
      {
        label: 'Organic', value: 'org',
        items: [
          {label: 'Berlin', value: 'Berlin'},
          {label: 'Frankfurt', value: 'Frankfurt'},
          {label: 'Hamburg', value: 'Hamburg'},
          {label: 'Munich', value: 'Munich'}
        ]
      },
      {
        label: 'Inorganic', value: 'inorg',
        items: [
          {label: 'Chicago', value: 'Chicago'},
          {label: 'Los Angeles', value: 'Los Angeles'},
          {label: 'New York', value: 'New York'},
          {label: 'San Francisco', value: 'San Francisco'}
        ]
      }

    ];
  }

  addFertilizer(pname: any, comname: any, protype: any) {

    console.log(pname)
    console.log(comname)
    console.log(protype.name)

    this.fertilizerService.addFertilizer(pname, comname, protype.name).subscribe(() => {
      alert("The fertilizer added successfully!!")
    });

    this.createForm = this.fb.group({
      pname: ['', Validators.required],
      comname: '',
      protype: ''
    });

  };

  ngOnInit(): void {
  }

}
