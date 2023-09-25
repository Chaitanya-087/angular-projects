import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';
import { VendingMachineSectionComponent } from './vending-machine-section/vending-machine-section.component';

const routes: Routes = [
  {path:'', redirectTo: '/vending-machine', pathMatch: 'full'},
  {path: 'vending-machine', component: VendingMachineComponent},
  {path: 'vending-machine/section/:id', component: VendingMachineSectionComponent},
  {path: '**', redirectTo: '/vending-machine', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
