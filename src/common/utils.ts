import {
    iMachineContext,
    tMachineStateSchema,
    STATES,
    tTransitionEvent,
    iEmployee,
    iEmployeeDataOnly,
} from "./../common/models";
import { AddIcon, QuestionIcon, LockIcon, UnlockIcon, StarIcon } from "@chakra-ui/icons";
import { createMachine } from "xstate";
import { eEmployeeState, eStatusColors, eTransitionDirection } from "./enums";

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
        return eTransitionDirection.PREVIOUS;
    } else if (diff == -1) {
        return eTransitionDirection.NEXT;
    }
    return false;
};

export const getColorOfState = (state: string): eStatusColors => {
    const weight = getStepNumber(state);
    if (weight < 4) return eStatusColors.YELLOW;
    if (weight < 5) return eStatusColors.GREEN;
    else return eStatusColors.RED;
};

export const createStepperMachine = ({ initState, id }: { initState: eEmployeeState; id: number }) =>
    createMachine<iMachineContext, tTransitionEvent, tMachineStateSchema>({
        id: `stepper_${id}`,
        initial: initState,
        context: { state: initState },
        states: STATES,
    });

export const mapStateToMachine = (item: iEmployeeDataOnly): iEmployee => ({
    ...item,
    stateMachine: createStepperMachine({ initState: item.state, id: item.id }),
});
