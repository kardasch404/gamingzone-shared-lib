export class ErrorDTO {
  statusCode: number;
  message: string;
  error: string;
  timestamp: string;
  path?: string;
  details?: Record<string, unknown>;

  constructor(
    statusCode: number,
    message: string,
    error: string,
    path?: string,
    details?: Record<string, unknown>,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.timestamp = new Date().toISOString();
    this.path = path;
    this.details = details;
  }
}
