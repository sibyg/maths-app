import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdditionComponent} from "./addition/addition.component";
import {MultiplicationComponent} from "./multiplication/multiplication.component";

const routes: Routes = [
  {path: 'addition', component: AdditionComponent},
  {path: 'multiplication', component: MultiplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
