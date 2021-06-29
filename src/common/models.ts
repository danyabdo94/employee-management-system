export interface iEmployee {
    id: number;
    email: string;
    name: string;
    countryCode: string;
    position: string;
    state: eEmployeeState;
}

export enum eEmployeeState {
    ADDED = "ADDED",
    IN_CHECK = "IN-CHECK",
    APPROVED = "APPROVED",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

export enum STATUS_COLORS {
    YELLOW = "yellow",
    GREEN = "green",
    RED = "red",
}
