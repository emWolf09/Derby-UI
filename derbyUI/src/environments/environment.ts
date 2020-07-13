import { HttpHeaders } from '@angular/common/http';

const HOSTNAME: string = "localhost";
const PORT_NUMBER: number = 3333;
const BASE_URL: string = 'http://'+ HOSTNAME + ':' + PORT_NUMBER;
const headers = new HttpHeaders()
  .set('Content-Type','application/json')
  .set('Access-Control-Allow-Origin',BASE_URL);

export const environment = {
  production: false,
  getUserByIdUrl:BASE_URL+'/profile/getUserById/',
  header_zuul:headers
};


