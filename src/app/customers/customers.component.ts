import { Component, OnInit } from '@angular/core'
import { Customers } from '../Model/customers'
import { CustomerDataService } from '../service/customer-data.service'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomerComponent implements OnInit {
  allcustomers: Customers[]

  constructor(private customerService: CustomerDataService) {}

  ngOnInit() {
    this.allcustomers = this.customerService.get()
    console.log(this.allcustomers)
  }

  onDelete(id: Number) {
    this.customerService.delete(id)
    console.log(id)
  }
}
