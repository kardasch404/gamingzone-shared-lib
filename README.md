# gamingzone-shared-lib

Shared library for GamingZone microservices architecture.

## Installation

```bash
npm install @gamingzone/shared
```

## Usage

### DTOs

```typescript
import { ResponseDTO, PaginationDTO, ErrorDTO } from '@gamingzone/shared';

const response = ResponseDTO.ok({ id: 1, name: 'Product' });
const pagination = new PaginationDTO();
pagination.page = 2;
pagination.limit = 20;
```

### Interfaces

```typescript
import { IRepository, IUseCase, IEvent } from '@gamingzone/shared';

class ProductRepository implements IRepository<Product> {
  // Implementation
}
```

### Exceptions

```typescript
import { NotFoundException, BadRequestException } from '@gamingzone/shared';

throw new NotFoundException('Product', '123');
throw new BadRequestException('Invalid input');
```

### Events

```typescript
import { BaseEvent, EventType } from '@gamingzone/shared';

const event = new BaseEvent(
  EventType.PRODUCT_CREATED,
  'product-123',
  'Product',
  { name: 'Gaming Mouse', price: 49.99 }
);
```

## Development

```bash
npm install
npm run build
npm run lint
npm run format
```
