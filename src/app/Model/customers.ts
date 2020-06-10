export class Customers {
  public CustomerId: number
  public name: string
  public age: number
  public gender: any
  public address: [
    {
      Street: string
      Postcode: string
      HouseNumber: number
    },
  ]
  public Orders: Order[]
}

export class Order {
  OrderId: string
  OrderDate: Date
  Amount: number
}
