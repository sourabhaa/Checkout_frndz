import {
  Avatar,
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

function Navbar({ name, pic, page }) {
  return (
    <Box h="50px" w="100%" ml={4}>
      <Flex>
        <Text ml={4} fontSize="xl" fontWeight="semibold" color="gray.600">
          {page}
        </Text>
        <Spacer />
        <Wrap mr={2}>
          <WrapItem>
            <Avatar size="sm" name={name} src={pic}></Avatar>
          </WrapItem>
          <WrapItem>
            <Text fontSize="md" textAlign="center" pt={1}>
              {name}
            </Text>
          </WrapItem>
        </Wrap>
      </Flex>
      <Divider mt={3}></Divider>
    </Box>
  );
}

export default Navbar;
