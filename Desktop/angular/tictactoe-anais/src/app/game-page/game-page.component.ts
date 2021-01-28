import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  public grid: Array<Cell> =[]; //create empty arrayw with cell object as type of datas

  private gridSize = 9; // force grid size at 9 cells

  constructor() {
    for (let i = 0; i <this.gridSize; i++){ // force grid size at 9 cells
      this.grid.push({
        empty: true, // appelle les éléments de l'interface
        cross: false,
        circle: false,
      });
    }
   }

  ngOnInit(): void {
  }
  public clickOnCell(cell: Cell):void{
    cell.empty=false;
    cell.cross= true;

  }

}
