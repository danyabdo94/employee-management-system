import { useEffect } from "react";
import { useMachine } from "@xstate/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { checkForValidity, getStepNumber } from "../../common/utils";
import { iEmployee } from "../../common/models";
import { useAppDispatch } from "../../common/hooks";
import { editEmployeesAsync } from "../employees-list/employee.list.slicer";

interface IStepperProps {
    steps: { label: string; icon: React.ComponentType }[];
    initialStep: number;
    machine: iEmployee["stateMachine"];
    employee: iEmployee;
}
import { useTranslation } from "react-i18next";

export default function Stepper({ steps, initialStep, machine, employee }: IStepperProps): JSX.Element {
    const [state, send] = useMachine(machine);
    const { t } = useTranslation("common");

    const dispatch = useAppDispatch();
    const { activeStep, reset } = useSteps({
        initialStep: initialStep,
    });
    useEffect(() => {
        reset();
    }, [employee]);

    const isValidPress = async (pressedStep: string) => {
        const nextState = checkForValidity(activeStep, getStepNumber(pressedStep));
        if (state && nextState) {
            dispatch(editEmployeesAsync({ state: pressedStep, employeeId: employee.id }));
            send(nextState);
        }
    };
    return (
        <Steps activeStep={activeStep}>
            {steps.map(({ label, icon }) => (
                <Step
                    label={t(label)}
                    key={label}
                    onClick={() => {
                        isValidPress(label);
                    }}
                    icon={icon}
                ></Step>
            ))}
        </Steps>
    );
}
