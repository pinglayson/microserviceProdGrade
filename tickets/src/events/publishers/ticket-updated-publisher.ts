import { Publisher, Subjects, TicketUpdatedEvent } from "@pinglaysonorg/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdate;
}
