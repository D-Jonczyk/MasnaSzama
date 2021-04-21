export class RestaurantOrders {

  _orderId: number;
  _name: String[];

  constructor(id, name) {
    this._orderId = id;
    this._name = name;
  }


  get orderId(): number {
    return this._orderId;
  }

  set orderId(value: number) {
    this._orderId = value;
  }


  get name(): String[] {
    return this._name;
  }

  set name(value: String[]) {
    this._name = value;
  }
}

