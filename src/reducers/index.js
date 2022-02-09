import { combineReducers } from 'redux';
import tables from './restaurant/tables';

export default combineReducers({
    tablesList: tables,
});