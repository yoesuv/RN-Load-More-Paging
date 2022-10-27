import Axios, { AxiosInstance } from 'axios';

export const client = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 30000,
  });
  client.interceptors.request.use((request) => {
    //console.log(`Request # `, JSON.stringify(request, null, 2));
    console.log(`Request # url `+request.url);
    return request;
  });
  client.interceptors.response.use((response) => {
    console.log(`Response # `, JSON.stringify(response, null, 2));
    return response;
  });