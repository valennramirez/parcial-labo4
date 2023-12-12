import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NuevaCitaPageComponent } from './pages/nueva-cita-page/nueva-cita-page.component';

const routes: Routes = [
  {path: 'home', component:HomePageComponent}, 
  {path: 'nuevaCita', component:NuevaCitaPageComponent}, 
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
