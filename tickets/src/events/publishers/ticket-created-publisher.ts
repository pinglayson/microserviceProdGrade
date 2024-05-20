import { Publisher, Subjects, TicketCreateEvent } from "@pinglaysonorg/common";

export class TicketCreatedPublisher extends Publisher<TicketCreateEvent> {
  readonly subject = Subjects.TicketCreated;
}
