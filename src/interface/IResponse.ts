export interface IResponse<I> {
  data: I;
  status: number;
  statusText: string;
}
