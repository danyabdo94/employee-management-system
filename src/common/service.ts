import { EDIT_EMPLOYEE, GET_EMPLOYEES } from "./consts";
import axios from "axios";
import { iEmployeeDataOnly } from "./models";

export const getEmployeesService = (): Promise<{ data: [iEmployeeDataOnly] }> => axios.get(GET_EMPLOYEES);
export const editEmployeesService = async ({
    state,
    employeeId,
}: {
    state: string;
    employeeId: number;
}): Promise<{ data: iEmployeeDataOnly }> =>
    axios.put(EDIT_EMPLOYEE(employeeId), {
        state,
    });
