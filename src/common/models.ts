export interface iEmployee {
    id: number;
    email: string;
    name: string;
    country: string;
    state: eEmployeeState;
}

export enum eEmployeeState {
    ADDED = "ADDED",
    IN_CHECK = "IN-CHECK",
    APPROVED = "APPROVED",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}
