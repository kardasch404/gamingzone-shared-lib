import { IEvent } from '../interfaces/event.interface';

export enum EventType {
  USER_REGISTERED = 'user.registered',
  USER_UPDATED = 'user.updated',
  PRODUCT_CREATED = 'product.created',
  PRODUCT_UPDATED = 'product.updated',
  PRODUCT_DELETED = 'product.deleted',
  INVENTORY_UPDATED = 'inventory.updated',
  INVENTORY_RESERVED = 'inventory.reserved',
  INVENTORY_RELEASED = 'inventory.released',
  CART_CREATED = 'cart.created',
  CART_ITEM_ADDED = 'cart.item.added',
  CART_ITEM_REMOVED = 'cart.item.removed',
  ORDER_CREATED = 'order.created',
  ORDER_CONFIRMED = 'order.confirmed',
  ORDER_CANCELLED = 'order.cancelled',
  ORDER_SHIPPED = 'order.shipped',
  ORDER_DELIVERED = 'order.delivered',
  PAYMENT_INITIATED = 'payment.initiated',
  PAYMENT_COMPLETED = 'payment.completed',
  PAYMENT_FAILED = 'payment.failed',
  PAYMENT_REFUNDED = 'payment.refunded',
  REVIEW_CREATED = 'review.created',
  REVIEW_UPDATED = 'review.updated',
}

export class BaseEvent implements IEvent {
  eventId: string;
  eventType: string;
  timestamp: Date;
  aggregateId: string;
  aggregateType: string;
  version: number;
  payload: Record<string, unknown>;
  metadata?: Record<string, unknown>;

  constructor(
    eventType: string,
    aggregateId: string,
    aggregateType: string,
    payload: Record<string, unknown>,
  ) {
    this.eventId = crypto.randomUUID();
    this.eventType = eventType;
    this.timestamp = new Date();
    this.aggregateId = aggregateId;
    this.aggregateType = aggregateType;
    this.version = 1;
    this.payload = payload;
  }
}
