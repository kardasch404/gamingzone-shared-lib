export interface IEvent {
  eventId: string;
  eventType: string;
  timestamp: Date;
  payload: any;
  metadata?: Record<string, any>;
}
