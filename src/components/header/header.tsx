import { Box, Flex, Text, Heading, Button, Stack, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import NAV_ITEMS from "./nav-items";

export default function Header(): JSX.Element {
    const { t } = useTranslation(["header", "common"]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} bg="teal.500" color="white">
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    {t("logo")}
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <HamburgerIcon />
            </Box>

            <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
            >
                {NAV_ITEMS.map((navItem) => (
                    <Text key={navItem.label}>{t(`common:${navItem.label}`)}</Text>
                ))}
            </Stack>

            <Box display={{ base: isOpen ? "block" : "none", md: "block" }} mt={{ base: 4, md: 0 }}>
                <Button variant="outline" _hover={{ bg: "teal.700", borderColor: "teal.700" }}>
                    <AddIcon /> <Box ml={1}>{t("common:add employee")}</Box>
                </Button>
            </Box>
        </Flex>
    );
}
