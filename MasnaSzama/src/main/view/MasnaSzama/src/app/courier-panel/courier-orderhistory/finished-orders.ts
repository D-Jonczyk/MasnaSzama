export interface FinishedOrders {
  orderId: number;
  courierId: number;
  orderPrice: number;
  restoName: string;
  customerAddress: string;
  phoneNumber: number;
  orderedTime: string;
  desiredDeliveryTime: string;
  deliveredTime: string;
}
