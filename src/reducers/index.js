import { combineReducers } from 'redux';

// Reducers
import authReducer from './authReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    items: itemsReducer
});

export default rootReducer;