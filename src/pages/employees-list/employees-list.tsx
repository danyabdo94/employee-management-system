import { Flex, Box, Text, Spacer, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export default function EmployeesList(): JSX.Element {
    const { t } = useTranslation("common");

    return (
        <>
            <Flex my={2} mx={4} alignItems="center">
                <Box p="2">
                    <Text fontSize="4xl">{t("employees")}</Text>
                </Box>
                <Spacer />
                <Box>
                    <IconButton
                        variant="outline"
                        colorScheme="teal"
                        aria-label={t("add employee")}
                        icon={<AddIcon />}
                    />
                </Box>
            </Flex>
            <Flex my={2} mx={4}></Flex>
        </>
    );
}
