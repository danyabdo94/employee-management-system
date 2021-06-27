import { Step, Steps, useSteps } from "chakra-ui-steps";

interface IStepperProps {
    steps: { label: string; icon: React.ComponentType }[];
    initialStep: number;
}

export default function Stepper({ steps, initialStep }: IStepperProps): JSX.Element {
    const { activeStep } = useSteps({
        initialStep: initialStep,
    });
    return (
        <Steps activeStep={activeStep}>
            {steps.map(({ label, icon }) => (
                <Step
                    label={label}
                    key={label}
                    onClick={(e) => {
                        console.log(label);
                    }}
                    icon={icon}
                ></Step>
            ))}
        </Steps>
    );
}
