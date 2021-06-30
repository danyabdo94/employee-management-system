export const GET_EMPLOYEES = `${process.env.REACT_APP_API_BASE}/employees`;

export const ADD_EMPLOYEE = `${process.env.REACT_APP_API_BASE}/employees`;

export const EDIT_EMPLOYEE = (id: number): string => `${process.env.REACT_APP_API_BASE}/employees/${id}`;
