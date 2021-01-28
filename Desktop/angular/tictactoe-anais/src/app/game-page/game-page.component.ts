import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  public grid: Array<any> =[]; //create empty array

  private gridSize = 9; // force grid size at 9 cells

  constructor() {
    for (let i = 0; i <this.gridSize; i++){ // force grid size at 9 cells
      this.grid.push(null);
    }
   }

  ngOnInit(): void {
  }

}
