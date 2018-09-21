import {GET_CUSTOMERS} from './constants';

export const getCourses = () => dispatch => {
  return fetch('/api/customers')
    .then(res => res.json())
    .then()

    axios.get('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))
    .catch(function (error) {
     throw error
    });
}
