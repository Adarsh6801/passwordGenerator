import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { PasswordOptionsComponent } from './components/password-options/password-options.component';
import {NgFor} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ClipboardModule } from 'ngx-clipboard';
@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent,
    PasswordStrengthComponent,
    PasswordOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatRadioModule,
    FormsModule,
    NgIf,
    MatSliderModule,
    MatProgressBarModule,
    MatCheckboxModule,
    NgFor,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
