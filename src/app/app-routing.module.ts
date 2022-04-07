import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ErrorComponent } from './error/error.component';
import { LoginPage } from './login/login.page';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component:LoginPage
  },
  {
    path: 'home',
    component:AppComponent
  },
  {
    path: 'bienvenido',
    component:BienvenidoComponent
  },
  {
    path: 'error',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
