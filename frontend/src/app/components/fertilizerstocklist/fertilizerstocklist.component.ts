import { FertilizerService } from './../../services/fertilizer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fertilizerstocklist',
  templateUrl: './fertilizerstocklist.component.html',
  styleUrls: ['./fertilizerstocklist.component.css'],
})
export class FertilizerstocklistComponent implements OnInit {
  stocks: any = [];
  isUpdateStockClicked: any;
  stockId: any = '';

  constructor(private fertiService: FertilizerService) {}

  ngOnInit(): void {
    this.fetchStocks();
  }

  fetchStocks() {
    this.fertiService.getFertilizersStock().subscribe((data) => {
      this.stocks = data;
      console.log(this.stocks);
    });
  }

  deleteStock(id: any) {
    this.fertiService.deleteFertilizerStock(id).subscribe(() => {
      this.fetchStocks();
    });
  }

  clickUpdateStock(id: any) {
    console.log(id);
    this.stockId = id;

    this.isUpdateStockClicked = 'updateStock';
  }
}
