export interface GenericResponse<T> {
  get: string;
  parameters: any[];
  errors: any[];
  results: number;
  paging: Paging;
  response: T[];
}

export interface Paging {
  current: number;
  total: number;
}
