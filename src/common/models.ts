import { StateMachine } from "xstate";

export interface iEmployee {
    id: number;
    email: string;
    name: string;
    countryCode: string;
    position: string;
    state: eEmployeeState;
    stateMachine: StateMachine<iMachineContext, tMachineStateSchema, tTransitionEvent>;
}

export enum eEmployeeState {
    ADDED = "ADDED",
    IN_CHECK = "IN_CHECK",
    APPROVED = "APPROVED",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

export enum eStatusColors {
    YELLOW = "yellow",
    GREEN = "green",
    RED = "red",
}

export type tTransitionEvent = { type: eTransitionDirection.NEXT } | { type: eTransitionDirection.PREVIOUS };

export enum eTransitionDirection {
    NEXT = "NEXT",
    PREVIOUS = "PREVIOUS",
}
export const STATES = {
    ADDED: {
        on: { NEXT: eEmployeeState.IN_CHECK },
    },
    IN_CHECK: {
        on: { NEXT: eEmployeeState.APPROVED, PREVIOUS: eEmployeeState.ADDED },
    },
    APPROVED: {
        on: { NEXT: eEmployeeState.ACTIVE, PREVIOUS: eEmployeeState.IN_CHECK },
    },
    ACTIVE: {
        on: { NEXT: eEmployeeState.INACTIVE, PREVIOUS: eEmployeeState.APPROVED },
    },
    INACTIVE: {
        on: { NEXT: eEmployeeState.ACTIVE, PREVIOUS: eEmployeeState.APPROVED },
    },
};
export type tMachineStateSchema = {
    value:
        | eEmployeeState.ADDED
        | eEmployeeState.IN_CHECK
        | eEmployeeState.APPROVED
        | eEmployeeState.INACTIVE
        | eEmployeeState.ACTIVE;
    context: iMachineContext & {
        state:
            | eEmployeeState.ADDED
            | eEmployeeState.IN_CHECK
            | eEmployeeState.APPROVED
            | eEmployeeState.INACTIVE
            | eEmployeeState.ACTIVE;
    };
};

// The context (extended state) of the machine
export interface iMachineContext {
    state: eEmployeeState;
}
