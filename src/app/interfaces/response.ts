export interface Response<T = any> { 
    responseCode: number;
    status: string; 
    message: string; 
    data: T; 
  }
   