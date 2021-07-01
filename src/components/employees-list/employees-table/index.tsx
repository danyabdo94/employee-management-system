import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex, IconButton } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { getColorOfState, getStepNumber, mapStateToMachine, steps } from "../../../common/utils";
import { useTranslation } from "react-i18next";
import { StatusCircle, Stepper } from "../../";
import { useAppSelector } from "../../../common/hooks";
import { selectEmployees } from "../employee.list.slicer";
import { iEmployee } from "../../../common/models";

export default function EmployeesTable(): JSX.Element {
    const { t } = useTranslation(["employeesListTranslations", "common"]);

    const employeesState = useAppSelector(selectEmployees);
    const [employeesListWithMachines, setEmployeesListWithMachines] = useState<iEmployee[] | []>([]);
    useEffect(() => {
        if (employeesState?.list.length) {
            setEmployeesListWithMachines(employeesState.list.map((item) => mapStateToMachine(item)));
        }
    }, [employeesState]);
    return (
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
                {employeesListWithMachines?.map((employee) => (
                    <Tr key={employee.id}>
                        <Td>{employee.id}</Td>
                        <Td>
                            <Flex alignItems="center">
                                <Box> {`${employee.name}, ${employee.country}`} </Box>
                                <Box pb={1} ml={1}>
                                    <StatusCircle
                                        color={getColorOfState(employee.state)}
                                        label={employee.state}
                                        boxSize={4}
                                    />
                                </Box>
                            </Flex>
                        </Td>
                        <Td>{employee.position}</Td>
                        <Td>
                            <Stepper
                                steps={steps}
                                initialStep={getStepNumber(employee.state)}
                                machine={employee.stateMachine}
                                employee={employee}
                            ></Stepper>
                        </Td>
                        <Td>
                            <IconButton
                                variant="outline"
                                colorScheme="teal"
                                aria-label={t("common:add employee")}
                                icon={<ViewIcon />}
                            />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}
