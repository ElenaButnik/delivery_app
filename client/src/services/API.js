import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});


export function FetchGetProduct(){
    return instance.get('api/product')
}


export function FetchGetShops(){
  return instance.get('api/brand')
}

export function fetchPostOrders(order) {
  return instance.post(`api/orders`, { order });
}

export function FetchGetOrders(params) {
  return instance.get(`api/orders`, { params });
}

export function fetchGetOrderDetails(orderId) {
  return instance.get(`api/orders/${orderId}`);
}