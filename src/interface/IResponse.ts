export interface IResponse<I> {
  data: I;
  status: number;
  statusText: string;
}

export interface IPayload {
  classId: string;
  attendeeFullName: string;
  attendeeEmail: string;
}
