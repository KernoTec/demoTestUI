export interface DataResponse<T> {
  httpStatus: string;
  response: T;
  message: string;
}
