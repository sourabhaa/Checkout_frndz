import {
  Avatar,
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
  Wrap,
  WrapItem,
  MenuButton,
  MenuGroup,
  Menu,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import ChangeProfileCard from "./ProfileMenu";

function Navbar({ page, user, users }) {
  return (
    <Box h="50px" w="100%" ml={4}>
      <Flex>
        {/* Page Label */}
        <Text ml={4} fontSize="xl" fontWeight="semibold" color="gray.600">
          {page}
        </Text>
        <Spacer />

        {/* Profile shortcut Menu & Signout */}
        <Wrap mr={2}>
          <WrapItem>
            <Menu rounded="20px" size="xl" shadow="dark-lg">
              <MenuButton
                as={Avatar}
                size="sm"
                name={user.name}
                src={user.profilepicture}
              />
              <MenuList>
                <MenuGroup>
                  <ChangeProfileCard user={user} users={users} />
                </MenuGroup>
              </MenuList>
            </Menu>
          </WrapItem>
          <WrapItem>
            <Text fontSize="md" textAlign="center" pt={1}>
              {user.name}
            </Text>
          </WrapItem>
        </Wrap>
      </Flex>
      <Divider mt={3}></Divider>
    </Box>
  );
}

export default Navbar;
