import { ASYNC_STATUS } from "../../common/enums";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../common/store";
import { EmployeesState, iEmployee, iEmployeeDataOnly } from "../../common/models";
import { getEmployeesService } from "../../common/service";
import { mapStateToMachine } from "../../common/utils";

const initialState: EmployeesState = {
    list: [],
    status: ASYNC_STATUS.IDLE,
};

export const getEmployeesAsync = createAsyncThunk("Employees/fetchEmployees", async () => {
    const response = await getEmployeesService();
    return response.data;
});

export const EmployeesSlice = createSlice({
    name: "Employees",
    initialState,
    reducers: {
        // editEmployee: (state, action: PayloadAction<[iEmployeeDataOnly]>) => {
        //     state.list = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEmployeesAsync.pending, (state) => {
                state.status = ASYNC_STATUS.LOADING;
            })
            .addCase(getEmployeesAsync.fulfilled, (state, action) => {
                state.status = ASYNC_STATUS.IDLE;
                const mappedItems = action.payload.map((item: iEmployeeDataOnly) => mapStateToMachine(item));
                state.list = mappedItems as [iEmployee];
            });
    },
});

export const {} = EmployeesSlice.actions;

export const selectEmployees = (state: RootState) => state.employees;

export default EmployeesSlice.reducer;
