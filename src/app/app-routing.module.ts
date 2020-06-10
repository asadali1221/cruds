import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CustomerComponent } from './customers/customers.component'
import { AddCustomerComponent } from './add-customer/add-customer.component'

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
  },
  {
    path: 'customer/add/:id',
    component: AddCustomerComponent,
  },
  {
    path: 'customer/edit/:id',
    component: AddCustomerComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
