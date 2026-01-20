export class ResponseDTO<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  timestamp: string;

  constructor(success: boolean, data?: T, message?: string, error?: string) {
    this.success = success;
    this.data = data;
    this.message = message;
    this.error = error;
    this.timestamp = new Date().toISOString();
  }

  static success<T>(data?: T, message?: string): ResponseDTO<T> {
    return new ResponseDTO(true, data, message);
  }

  static error<T>(error: string, message?: string): ResponseDTO<T> {
    return new ResponseDTO(false, undefined, message, error);
  }
}
