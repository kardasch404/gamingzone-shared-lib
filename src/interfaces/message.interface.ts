export interface IMessage {
  messageId: string;
  topic: string;
  payload: any;
  timestamp: Date;
  headers?: Record<string, string>;
}
