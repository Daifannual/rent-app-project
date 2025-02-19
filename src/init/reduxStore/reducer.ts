
import api from "@/dataservices/api/api";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
}); 

export default rootReducer;