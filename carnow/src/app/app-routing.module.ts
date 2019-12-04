import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index.component';
import { LogoutComponent } from './logout.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
	{path: 'index', component : IndexComponent},
	{path: 'account', component : AccountComponent},
	{path: 'logout', component : LogoutComponent},
	{path: '', redirectTo : '/index', pathMatch: 'full'},
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
