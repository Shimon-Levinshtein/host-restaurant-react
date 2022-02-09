import { combineReducers } from 'redux';
import allCalculatorDatabase from './allCalculatorDatabase';
import controlBodyScreen from './controlBodyScreen';
import controlValuesScreens from './controlValuesScreens';
import webmaster from './webmaster';
import users from './users';
import cart from './cart';
import orderPayment from './orderPayment';
import orderPaymentRes from './orderPaymentRes';
import orders from './orders';
import loading from './loading';
import deliveries from './deliveries';
import orderPaymentResPaypal from './orderPaymentResPaypal';
import VAT from './VAT';

export default combineReducers({
    allCalculatorDatabase: allCalculatorDatabase,
    controlBodyScreen: controlBodyScreen,
    controlValuesScreens: controlValuesScreens,
    webmaster: webmaster,
    users: users,
    cart: cart,
    orderPayment: orderPayment,
    orderPaymentRes: orderPaymentRes,
    orders: orders,
    loading: loading,
    deliveries: deliveries,
    orderPaymentResPaypal: orderPaymentResPaypal,
    VAT: VAT,
});