import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@pinglaysonorg/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
