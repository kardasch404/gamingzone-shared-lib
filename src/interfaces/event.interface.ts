export interface IEvent {
  eventId: string;
  eventType: string;
  timestamp: Date;
  aggregateId: string;
  aggregateType: string;
  version: number;
  payload: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}

export interface IEventPublisher {
  publish(event: IEvent): Promise<void>;
  publishBatch(events: IEvent[]): Promise<void>;
}

export interface IEventHandler<T extends IEvent> {
  handle(event: T): Promise<void>;
}
