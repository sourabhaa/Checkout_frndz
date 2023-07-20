import {
  WrapItem,
  Badge,
  Box,
  Wrap,
  Avatar,
  Text,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";

function ChatMenu({ users }) {
  useEffect(() => {
    return () => {
      console.log("in chatmenu");
    };
  }, []);

  return (
    // <Menu>
    //   <MenuButton as={Button} bg="#2C64C8" size="xl" w={100}></MenuButton>
    //   <MenuList>
    // <MenuGroup>
    <Box maxH={100} alignContent="center" overflow="auto">
      {users.map((user) => (
        <Box>
          <Wrap cursor="pointer" m={2}>
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
            <Spacer />
            <WrapItem alignSelf="right">
              <Badge rounded="full" boxSize="0.75em" bg="green.500" />
            </WrapItem>
          </Wrap>
        </Box>
      ))}
    </Box>
    //     {/* </MenuGroup> */}
    //   {/* </MenuList> */}
    // {/* </Menu> */}
  );
}

export default ChatMenu;
