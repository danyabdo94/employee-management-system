import { EDIT_EMPLOYEE, GET_EMPLOYEES } from "./consts";
import axios from "axios";
import { iEmployeeDataOnly } from "./models";
import { eEmployeeState } from "./enums";

export const getEmployeesService = (): Promise<{ data: [iEmployeeDataOnly] }> => axios.get(GET_EMPLOYEES);
export const editEmployeesService = ({ state }: { state: eEmployeeState }): Promise<{ data: iEmployeeDataOnly }> =>
    axios.put(EDIT_EMPLOYEE(1), {
        state,
    });
