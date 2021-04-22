export class OrderModel {
  public name: string;
  public price: number;
  public options: string[];
  public optionsPrice: number;
  public numOrder: number;
  public totalPrice: number;

  constructor(
    name: string,
    price: number,
    options: string[],
    optionsPrice: number,
    numOrder: number,
    totalPrice: number
  ) {
    this.name = name;
    this.price = price;
    this.options = options;
    this.optionsPrice = optionsPrice;
    this.numOrder = numOrder;
    this.totalPrice = totalPrice;
  }
}
