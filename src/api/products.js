const API = 'https://fakestoreapi.com';

export const getProducts = () => fetch(`${API}/products`)
    .then((response)=>response.json())