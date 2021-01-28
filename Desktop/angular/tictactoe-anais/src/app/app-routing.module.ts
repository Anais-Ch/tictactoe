import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { ParamPageComponent } from './param-page/param-page.component';

const routes: Routes = [

  {path: '', component: GamePageComponent},
  {path: 'params', component: ParamPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
