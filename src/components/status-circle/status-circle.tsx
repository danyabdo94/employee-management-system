import { Icon, Tooltip } from "@chakra-ui/react";

interface IStatusCircleProps {
    color: string;
    boxSize: number;
    label: string;
}

export default function StatusCircle({ color, boxSize, label }: IStatusCircleProps): JSX.Element {
    return (
        <Tooltip hasArrow label={label} bg={`${color}.600`}>
            <Icon viewBox="0 0 200 200" color={`${color}.500`} boxSize={boxSize}>
                <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
            </Icon>
        </Tooltip>
    );
}
