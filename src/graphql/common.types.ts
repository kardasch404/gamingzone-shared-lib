export interface GraphQLResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: GraphQLError[];
}

export interface GraphQLError {
  field?: string;
  message: string;
  code?: string;
}

export interface PaginationInput {
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface SortInput {
  field: string;
  order: 'ASC' | 'DESC';
}

export interface FilterInput {
  field: string;
  operator: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'like';
  value: unknown;
}
