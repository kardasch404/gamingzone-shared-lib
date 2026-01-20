# @gamingzone/shared-lib

Shared library for GamingZone microservices platform.

## Installation

```bash
npm install @gamingzone/shared-lib
```

## Usage

### Response DTOs

```typescript
import { ResponseDTO, PaginatedResponseDTO } from '@gamingzone/shared-lib';

// Success response
const response = ResponseDTO.success({ id: 1, name: 'Product' }, 'Product retrieved');

// Error response
const errorResponse = ResponseDTO.error('Not found', 'Product does not exist');

// Paginated response
const paginatedData = new PaginatedResponseDTO(
  [{ id: 1 }, { id: 2 }],
  1,    // page
  10,   // limit
  100   // total
);
```

### Interfaces

```typescript
import { IEvent, IMessage } from '@gamingzone/shared-lib';

// Event example
const event: IEvent = {
  eventId: 'evt_123',
  eventType: 'ORDER_CREATED',
  timestamp: new Date(),
  payload: { orderId: '123' },
  metadata: { userId: 'user_456' }
};

// Message example
const message: IMessage = {
  messageId: 'msg_123',
  topic: 'orders',
  payload: { orderId: '123' },
  timestamp: new Date(),
  headers: { 'content-type': 'application/json' }
};
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run dev
```

## Structure

```
src/
├── dto/
│   ├── response.dto.ts
│   ├── pagination.dto.ts
│   └── index.ts
├── interfaces/
│   ├── event.interface.ts
│   ├── message.interface.ts
│   └── index.ts
└── index.ts
```

## License

MIT
