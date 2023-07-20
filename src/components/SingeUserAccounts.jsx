import React from "react";
import {
  Stack,
  Box,
  Wrap,
  WrapItem,
  Avatar,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SingeUserAccounts({ user }) {
  const navigate = useNavigate();
  return (
    <Stack spacing="1">
      <Box height="30" bg="transparent">
        <Wrap
          my={2}
          cursor="pointer"
          onClick={() => navigate(`/profile/${user.id}`)}
        >
          <WrapItem>
            <Avatar size="sm" name={user.name} src={user.profilepicture} />
          </WrapItem>
          <WrapItem>
            <Text p="1" fontSize="md">
              {user.name}
            </Text>
          </WrapItem>
        </Wrap>
      </Box>
      <Divider mt={3} />
    </Stack>
  );
}

export default SingeUserAccounts;
