import React from "react";
import { Box, Flex, Center, VStack } from "@chakra-ui/react";
import UserAccountsCard from "../components/UserAccountsCard";

export default function UserListing() {
  return (
    <Box
      minHeight="100vh"
      backgroundImage="url(src/assets/bg.png)"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      width="100vw"
    >
      <Flex justifyContent="center" alignItems="center" minHeight="100vh">
        <VStack>
          <Center>
            <UserAccountsCard />
          </Center>
        </VStack>
      </Flex>
    </Box>
  );
}
