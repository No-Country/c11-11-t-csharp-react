export type TRequest = {
  url: string;
  data: {};
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: {};
  thunk?: any;
  isFile?: boolean;
};
