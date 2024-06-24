import { combineReducers } from '@reduxjs/toolkit';
import  beneficiaryReducer from './features/beneficiarySlice';

const rootReducer = combineReducers({
  beneficiaries: beneficiaryReducer,
});

export default rootReducer;