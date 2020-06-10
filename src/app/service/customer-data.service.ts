import { Injectable } from '@angular/core'
import { Customers } from '../Model/customers'

@Injectable({
  providedIn: 'root',
})
export class CustomerDataService {
  customers: Customers[] = [
    {
      CustomerId: 1,
      name: 'Wajeeh Ul Hassan',
      age: 81,
      gender: 'male',
      address: [
        {
          Street: '21',
          Postcode: '23',
          HouseNumber: 24,
        },
      ],
      Orders: [
        {
          OrderId: '1',
          OrderDate: new Date(),
          Amount: 21,
        },
      ],
    },
    {
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
    },
  ]

  constructor() {}

  get() {
    return this.customers
  }

  add(customer: Customers) {
    return this.customers.push(customer)
  }

  delete(id: Number) {
    let customer = this.customers.find((x) => x.CustomerId === id)
    let index = this.customers.indexOf(customer, 0)
    this.customers.splice(index, 1)
  }

  onGetCustomer(id: Number) {
    return this.customers.find((x) => x.CustomerId === id)
  }

  update(customer: Customers) {
    let updateCustomer = this.customers.find(
      (x) => x.CustomerId === customer.CustomerId,
    )
    updateCustomer.CustomerId = customer.CustomerId
    updateCustomer.name = customer.name
    updateCustomer.age = customer.age
    updateCustomer.gender = customer.gender
    updateCustomer.address = customer.address
    updateCustomer.Orders = customer.Orders
  }
}
