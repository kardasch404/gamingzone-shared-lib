export class PaginationDTO {
  page: number;
  limit: number;
  total: number;
  totalPages: number;

  constructor(page: number, limit: number, total: number) {
    this.page = page;
    this.limit = limit;
    this.total = total;
    this.totalPages = Math.ceil(total / limit);
  }
}

export class PaginatedResponseDTO<T> {
  data: T[];
  pagination: PaginationDTO;

  constructor(data: T[], page: number, limit: number, total: number) {
    this.data = data;
    this.pagination = new PaginationDTO(page, limit, total);
  }
}
