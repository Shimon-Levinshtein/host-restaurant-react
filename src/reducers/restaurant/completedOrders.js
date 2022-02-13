import { ADD_TO_CART } from '../../actions/completedOrders';

const defaultState = [
  // {
  //   Mobile: 'string identifier like (053-xxx-xxxx)',
  //   Diners: 'number of diners that got service',
  //   tables: 'list of int (table that the customer got service at)',
  //   start_time: 'timestamp when order start',
  //   end_time: 'timestamp when order completed',
  // }
];

const completedOrders = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;

  }
}

export default completedOrders;