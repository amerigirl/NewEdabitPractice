import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EasyComponent } from './easy/easy.component';

const routes: Routes = [
  {path: 'easy', component: EasyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
