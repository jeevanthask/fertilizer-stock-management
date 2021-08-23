import { Component, OnInit } from '@angular/core';
import { FertilizerService } from 'src/app/services/fertilizer.service';

@Component({
  selector: 'app-fertilizerslist',
  templateUrl: './fertilizerslist.component.html',
  styleUrls: ['./fertilizerslist.component.css'],
})
export class FertilizerslistComponent implements OnInit {
  fertilizers: any = [];

  isUpdateFertilizerClicked: any;
  fertilizerId: any = ''

  constructor(private ferilizerService: FertilizerService) {}

  ngOnInit() {
    this.fetchFertilizers();
  }

  fetchFertilizers() {
    this.ferilizerService.getFertilizers().subscribe((data) => {
      this.fertilizers = data;
      console.log(this.fertilizers);
    });
  }

  deleteFertilizer(id: any) {
    this.ferilizerService.deleteFertilizer(id).subscribe(() => {
      this.fetchFertilizers();
    });
  }

  clickUpdateFertilizer(id: any) {
    console.log(id);
    this.fertilizerId = id
    console.log('fertilizer is',this.fertilizerId)
    this.isUpdateFertilizerClicked = 'updateFertilizer';
  }

  handleBack() {
    alert('cbducb');
  }
}
