import { useMachine } from "@xstate/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { checkForValidity, getStepNumber } from "../../app/utils";
import { iEmployee } from "../../common/models";

interface IStepperProps {
    steps: { label: string; icon: React.ComponentType }[];
    initialStep: number;
    machine: iEmployee["stateMachine"];
}

export default function Stepper({ steps, initialStep, machine }: IStepperProps): JSX.Element {
    const [state, send] = useMachine(machine);
    console.log({ state });
    const { activeStep } = useSteps({
        initialStep: initialStep,
    });
    const isValidPress = (pressedStep: string) => {
        const goTo = checkForValidity(activeStep, getStepNumber(pressedStep));
        if (goTo) {
            console.log("IN");
            send(goTo);
        }
    };
    return (
        <Steps activeStep={activeStep}>
            {steps.map(({ label, icon }) => (
                <Step
                    label={label}
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
