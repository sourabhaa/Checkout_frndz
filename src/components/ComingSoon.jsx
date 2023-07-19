import React from "react";
import { Text, Box, Center } from "@chakra-ui/react";

const ComingSoon = () => {
  return (
    <Box mt={9} w="full">
      <Center>
        <Text
          fontSize="8xl"
          fontWeight="extrabold"
          color="gray.300"
          verticalAlign="center"
          pt={55}
        >
          Coming Soon
        </Text>
      </Center>
    </Box>
  );
};

export default ComingSoon;
