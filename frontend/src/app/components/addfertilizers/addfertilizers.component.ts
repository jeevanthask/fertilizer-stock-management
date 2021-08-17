import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FarmerService} from "../../services/farmer.service";
import {FertilizerService} from "../../services/fertilizer.service";

@Component({
  selector: 'app-addfertilizers',
  templateUrl: './addfertilizers.component.html',
  styleUrls: ['./addfertilizers.component.css']
})
export class AddfertilizersComponent implements OnInit {

  createForm: FormGroup;

  constructor(private fertilizerService: FertilizerService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      pname: ['', Validators.required],
      comname: '',
      protype: ''
    });
  }

  addFertilizer(pname: any, comname: any, protype: any) {

    console.log(pname)
    console.log(comname)
    console.log(protype)

    this.fertilizerService.addFertilizer(pname, comname, protype).subscribe(() => {
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
