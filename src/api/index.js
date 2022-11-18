const API_BASE = 'https://randomuser.me/api/?results=50';

export const getUsers = () => {
    return fetch(API_BASE)
    .then((response)=>response.json())
}