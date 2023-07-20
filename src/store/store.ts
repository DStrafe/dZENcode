import { reducer as timestampReducer } from "../slices/timestampSlice";
import thunkMiddleware from 'redux-thunk';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as categoriesReducer } from "@/slices/categoriesSlice";
import { reducer as productsReducer } from "@/slices/productsSlice";
import { reducer as ordersReducer } from "@/slices/ordersSlice";

const reducers = combineReducers({
    timestamp: timestampReducer,
    categories: categoriesReducer,
    products: productsReducer,
    orders: ordersReducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
