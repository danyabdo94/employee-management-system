import { StateMachine } from "xstate";
import { ASYNC_STATUS, eEmployeeState, eTransitionDirection } from "../common/enums";

export interface iEmployeeDataOnly {
    id: number;
    email: string;
    name: string;
    country: string;
    position: string;
    state: eEmployeeState;
}

export interface iEmployee {
    id: number;
    email: string;
    name: string;
    country: string;
    position: string;
    state: eEmployeeState;
    stateMachine: StateMachine<iMachineContext, tMachineStateSchema, tTransitionEvent>;
}

export type tTransitionEvent = { type: eTransitionDirection.NEXT } | { type: eTransitionDirection.PREVIOUS };
export interface EmployeesState {
    list: [iEmployeeDataOnly] | [];
    status: ASYNC_STATUS;
}

export const STATES = {
    ADDED: {
        on: {
            NEXT: eEmployeeState.IN_CHECK,
        },
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
