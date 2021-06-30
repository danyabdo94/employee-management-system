import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import employeesReducer from "../components/employees-list/employee.list.slicer";
const rootReducer = combineReducers({ employees: employeesReducer });
export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
