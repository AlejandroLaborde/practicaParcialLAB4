import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

const ROUTES: Routes =[
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'home'}

]
 
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(ROUTES)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
