import { eEmployeeState } from "./../common/models";
import { AddIcon, QuestionIcon, LockIcon, UnlockIcon, StarIcon } from "@chakra-ui/icons";

export const steps = [
    { label: eEmployeeState.ADDED, icon: AddIcon },
    { label: eEmployeeState.IN_CHECK, icon: QuestionIcon },
    { label: eEmployeeState.APPROVED, icon: StarIcon },
    { label: eEmployeeState.ACTIVE, icon: UnlockIcon },
    { label: eEmployeeState.INACTIVE, icon: LockIcon },
];

export const getInitialStep = (state: string) => steps.findIndex(({ label }) => (label as string) === state) + 1;

export const getColorOfState = (state: string) => {
    const weight = getInitialStep(state);
    if (weight < 4) return "yellow";
    if (weight < 5) return "green";
    else return "red";
};
