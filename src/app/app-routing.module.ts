import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { PasswordOptionsComponent } from './components/password-options/password-options.component';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';

const routes: Routes = [
  {path:"",component:PasswordGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
