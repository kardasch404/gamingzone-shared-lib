export class ResponseDTO<T> {
  success: boolean;
  data?: T;
  message?: string;
  timestamp: string;

  constructor(success: boolean, data?: T, message?: string) {
    this.success = success;
    this.data = data;
    this.message = message;
    this.timestamp = new Date().toISOString();
  }

  static ok<T>(data: T, message?: string): ResponseDTO<T> {
    return new ResponseDTO(true, data, message);
  }

  static fail<T>(message: string): ResponseDTO<T> {
    return new ResponseDTO(false, undefined, message);
  }
}
