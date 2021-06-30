import { GET_EMPLOYEES } from "./consts";
import axios from "axios";

export const getEmployeesService = () => axios.get(GET_EMPLOYEES);
