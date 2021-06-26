import { Table, Thead, Tbody, Tr, Th, Td, Flex, IconButton, Avatar, Box } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import mockedEmployees from "../../app/mock.data";

export default function EmployeesTable(): JSX.Element {
    const { t } = useTranslation("employeesTable");

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
                            <Td>{employee.state}</Td>
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
