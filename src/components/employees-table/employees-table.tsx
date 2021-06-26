import { Table, Thead, Tbody, Tr, Th, Td, Flex, IconButton } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import mockedEmployees from "../../app/mock.data";
import { Step, Steps, useSteps } from "chakra-ui-steps";

export default function EmployeesTable(): JSX.Element {
    const { t } = useTranslation("employeesTable");
    const content = <Flex py={4}>Test</Flex>;
    const steps = [
        { label: "Step 1", content },
        { label: "Step 2", content },
        { label: "Step 3", content },
    ];
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    });
    return (
        <Flex my={2} mx={4}>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>{t("id")}</Th>
                        <Th>{t("name")}</Th>
                        <Th>{t("position")}</Th>
                        <Th>{t("state")}</Th>
                        <Th>{t("action")}</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {mockedEmployees.map((employee) => (
                        <Tr key={employee.id}>
                            <Td>{employee.id}</Td>
                            <Td>{`${employee.name}, ${employee.countryCode}`}</Td>
                            <Td>{employee.position}</Td>
                            <Td>
                                <Steps activeStep={activeStep}>
                                    {steps.map(({ label, content }) => (
                                        <Step
                                            label={label}
                                            key={label}
                                            onClick={(e) => {
                                                console.log(e);
                                            }}
                                        >
                                            {content}
                                        </Step>
                                    ))}
                                </Steps>
                            </Td>
                            <Td>
                                <IconButton
                                    variant="outline"
                                    colorScheme="teal"
                                    aria-label={t("add employee")}
                                    icon={<ViewIcon />}
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Flex>
    );
}
