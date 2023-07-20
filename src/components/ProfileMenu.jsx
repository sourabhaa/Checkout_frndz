import {
  Avatar,
  Box,
  VStack,
  Text,
  Wrap,
  WrapItem,
  Divider,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProfileMenu({ user, users }) {
  const navigate = useNavigate();
  return (
    <VStack m={3} alignContent="center">
      <Avatar size="xl" name={user.name} src={user.profilepicture}></Avatar>
      <Text>{user.name}</Text>
      <Text fontSize="md">{user.email}</Text>
      <Box maxH={100} alignContent="center" overflow="auto">
        {users.map((user) => (
          //User profile Menu with list of Users
          <Box>
            <Divider />
            <Wrap
              cursor="pointer"
              m={2}
              onClick={() => {
                navigate(`/profile/${user.id}`);
              }}
            >
              <WrapItem>
                <Avatar
                  size="xs"
                  name={user.name}
                  src={user.profilepicture}
                ></Avatar>
              </WrapItem>
              <WrapItem pt={1}>
                <Text fontSize="xs" textAlign="center">
                  {user.name}
                </Text>
              </WrapItem>
            </Wrap>
          </Box>
        ))}
      </Box>

      {/* Action Button - Sign Out */}
      <Button
        size="sm"
        rounded="2xl"
        fontSize="lg"
        bg="#D45150"
        color="white"
        onClick={() => navigate(`/userlist`)}
      >
        Sign out
      </Button>
    </VStack>
  );
}

export default ProfileMenu;
