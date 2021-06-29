import {
    eEmployeeState,
    iMachineContext,
    tMachineStateSchema,
    STATES,
    eStatusColors,
    tTransitionEvent,
    eTransitionDirection,
} from "./../common/models";
import { AddIcon, QuestionIcon, LockIcon, UnlockIcon, StarIcon } from "@chakra-ui/icons";
import { createMachine } from "xstate";

export const steps = [
    { label: eEmployeeState.ADDED, icon: AddIcon },
    { label: eEmployeeState.IN_CHECK, icon: QuestionIcon },
    { label: eEmployeeState.APPROVED, icon: StarIcon },
    { label: eEmployeeState.ACTIVE, icon: UnlockIcon },
    { label: eEmployeeState.INACTIVE, icon: LockIcon },
];

export const getStepNumber = (state: string): number => steps.findIndex(({ label }) => (label as string) === state) + 1;

export const checkForValidity = (activeStep: number, pressedStep: number): false | eTransitionDirection => {
    const diff = activeStep - pressedStep;
    if (diff == 1) {
        return eTransitionDirection.NEXT;
    } else if (diff == -1) {
        return eTransitionDirection.PREVIOUS;
    }
    return false;
};

export const getColorOfState = (state: string): eStatusColors => {
    const weight = getStepNumber(state);
    if (weight < 4) return eStatusColors.YELLOW;
    if (weight < 5) return eStatusColors.GREEN;
    else return eStatusColors.RED;
};

export const createStepperMachine = (initState: eEmployeeState) =>
    createMachine<iMachineContext, tTransitionEvent, tMachineStateSchema>({
        id: "stepper",
        initial: initState,
        context: { state: initState },
        states: STATES,
    });
