export abstract class BaseException extends Error {
  abstract statusCode: number;
  abstract code: string;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundException extends BaseException {
  statusCode = 404;
  code = 'NOT_FOUND';

  constructor(resource: string, id?: string) {
    super(id ? `${resource} with id ${id} not found` : `${resource} not found`);
  }
}

export class BadRequestException extends BaseException {
  statusCode = 400;
  code = 'BAD_REQUEST';

  constructor(message: string) {
    super(message);
  }
}

export class UnauthorizedException extends BaseException {
  statusCode = 401;
  code = 'UNAUTHORIZED';

  constructor(message = 'Unauthorized access') {
    super(message);
  }
}

export class ForbiddenException extends BaseException {
  statusCode = 403;
  code = 'FORBIDDEN';

  constructor(message = 'Access forbidden') {
    super(message);
  }
}

export class ConflictException extends BaseException {
  statusCode = 409;
  code = 'CONFLICT';

  constructor(message: string) {
    super(message);
  }
}

export class InternalServerException extends BaseException {
  statusCode = 500;
  code = 'INTERNAL_SERVER_ERROR';

  constructor(message = 'Internal server error') {
    super(message);
  }
}
