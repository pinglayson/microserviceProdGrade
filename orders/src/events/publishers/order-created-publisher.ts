import { Publisher, OrderCreatedEvent, Subjects } from "@pinglaysonorg/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
