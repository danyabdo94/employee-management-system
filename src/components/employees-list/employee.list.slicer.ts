import { ASYNC_STATUS } from "../../common/enums";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../common/store";
import { EmployeesState, iEmployeeDataOnly } from "../../common/models";
import { editEmployeesService, getEmployeesService } from "../../common/service";

const initialState: EmployeesState = {
    list: [],
    status: ASYNC_STATUS.IDLE,
};

export const getEmployeesAsync = createAsyncThunk("Employees/fetchEmployees", async () => {
    const response = await getEmployeesService();
    return response.data;
});

export const editEmployeesAsync = createAsyncThunk(
    "Employees/editEmployee",
    async ({ state, employeeId }: { state: string; employeeId: number }) => {
        const response = await editEmployeesService({ state, employeeId });
        return response.data;
    },
);

export const EmployeesSlice = createSlice({
    name: "Employees",
    initialState,
    reducers: {
        editEmployee: (state, action: PayloadAction<iEmployeeDataOnly>) => {
            state.list = [...state.list];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEmployeesAsync.pending, (state) => {
                state.status = ASYNC_STATUS.LOADING;
            })
            .addCase(getEmployeesAsync.fulfilled, (state, action) => {
                state.status = ASYNC_STATUS.IDLE;
                const mappedItems = action.payload as [iEmployeeDataOnly];
                state.list = mappedItems as [iEmployeeDataOnly];
            })
            .addCase(editEmployeesAsync.fulfilled, (state, action) => {
                const index = state.list.findIndex((item) => item.id == action.payload.id);
                const filteredList = [...state.list] as [iEmployeeDataOnly];
                filteredList[index] = action.payload;
                state.list = filteredList;
            });
    },
});

export const { editEmployee } = EmployeesSlice.actions;

export const selectEmployees = (state: RootState): EmployeesState => state.employees;

export default EmployeesSlice.reducer;
