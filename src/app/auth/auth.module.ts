import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignupComponent } from './signup/signup.component';

import {NgxPaginationModule} from 'ngx-pagination';
// social login, check document here https://github.com/abacritt/angularx-social-login#readme

import { UtilsModule } from '../utils/utils.module';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';

import { NgSelectModule } from '@ng-select/ng-select';


const routes: Routes = [{
 
  path: 'signup',
  component: SignupComponent
},
{
  path: '',
  component: SignupComponent
},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    NgxPaginationModule,
    UtilsModule,NgSelectModule
  ],
  declarations: [

    SignupComponent,
   
  ],
  exports: [

  ],
  providers: [
  
  ]
})

export class AuthModule { }
