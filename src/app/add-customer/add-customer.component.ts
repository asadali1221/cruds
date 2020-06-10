import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { NumberValueAccessor, NgForm } from '@angular/forms'
import { Customers } from '../Model/customers'
import { CustomerDataService } from '../service/customer-data.service'

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  id: number // to store id and check whether its edit mode or add mode
  header: string // to store add edit text based upon condition

  customer: Customers = {
    CustomerId: 2,
    name: 'Asad',
    age: 82,
    gender: 'male',
    address: [
      {
        Street: '12',
        Postcode: '28',
        HouseNumber: 72,
      },
    ],
    Orders: [
      {
        OrderId: '5',
        OrderDate: new Date(),
        Amount: 67,
      },
    ],
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerDataService,
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id') //+ sign is to convert the to number because returned value is a string
    this.header = this.id === 0 ? 'Add Customer' : 'Edit Customer'

    if (this.id != 0) {
      this.customer = this.customerService.onGetCustomer(this.id)
    }
  }

  onSubmit(form: NgForm) {
    let customerObj: Customers = {
      CustomerId: form.value.CustomerId,
      name: form.value.name,
      age: form.value.age,
      gender: form.value.gender,
      address: [
        {
          Street: '12',
          Postcode: '28',
          HouseNumber: 72,
        },
      ],
      Orders: [
        {
          OrderId: '5',
          OrderDate: new Date(),
          Amount: 67,
        },
      ],
    }
    console.log(customerObj)
    if (this.id === 0) {
      this.customerService.add(customerObj)
    } else {
      this.customerService.update(customerObj)
    }

    this.router.navigateByUrl('')
  }
}
