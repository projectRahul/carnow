import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './add-car/add-car.component';
import { AccountComponent } from './account.component';
import { AppAccountRoutingModule } from './app-account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CarListComponent } from './car-list/car-list.component';


import { AccountService } from './account.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
	  AccountComponent,
	  AddCarComponent,
	  ProfileComponent,
	  ChangePasswordComponent,
	  CarListComponent,
  ],
  imports: [
    CommonModule,
    AppAccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AccountService]
})
export class AppAccountModule { }
