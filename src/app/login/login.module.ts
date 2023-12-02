import {NgModule} from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { components, providers } from './declaration';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports :[LoginRoutingModule,CommonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
    declarations : components,
    providers : providers
})

export class LoginModule{}