import { Flex } from "@chakra-ui/react";
import { useAppDispatch } from "../../common/hooks";
import { getEmployeesAsync } from "./employee.list.slicer";
import EmployeesTable from "./employees-table";

export default function EmployeesList(): JSX.Element {
    const dispatch = useAppDispatch();
    dispatch(getEmployeesAsync());
    return (
        <Flex my={2} mx={4}>
            <EmployeesTable></EmployeesTable>
        </Flex>
    );
}
