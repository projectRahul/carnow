import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CarListComponent } from './car-list/car-list.component';
import { PnfComponent } from './../pnf/pnf.component';


const routes: Routes = [
	{
		path : 'account' , children : [
			{path: 'profile', component : ProfileComponent},
			{path: 'change_password', component : ChangePasswordComponent},
			{path: 'add-car', component : AddCarComponent},
			{path: 'car-list', component : CarListComponent},
			{path: '', redirectTo : 'add-car', pathMatch: 'full'},
			{path : '**',component : PnfComponent}
		]
	}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppAccountRoutingModule { }
