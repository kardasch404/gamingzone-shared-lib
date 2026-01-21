export interface IRepository<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(entity: T): Promise<T>;
  update(id: string, entity: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}

export interface IPaginatedRepository<T> extends IRepository<T> {
  findPaginated(page: number, limit: number): Promise<{ data: T[]; total: number }>;
}
