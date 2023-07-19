import React, { useState, useEffect } from "react";
import UserDetailsCard from "../components/UserDetailsCard";
import {
  Flex,
  GridItem,
  Grid,
  Text,
  Box,
  Spacer,
  Divider,
  Wrap,
  WrapItem,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import ComingSoon from "../components/ComingSoon";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function Pages() {
  const dummy_user = {
    id: 1,
    name: "Loading...",
    username: "Loading...",
    email: "Loading...",
    profilepicture: "Loading...",
    address: {
      street: "Loading...",
      suite: "Loading...",
      city: "Loading...",
      zipcode: "Loading...",
      geo: {
        lat: "1",
        lng: "1",
      },
    },
    phone: "Loading...",
    website: "Loading...",
    company: {
      name: "Loading...",
      catchPhrase: "Loading...",
      bs: "Loading...",
    },
  };
  const { id } = useParams();
  const [user, setUser] = useState(dummy_user);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`https://panorbit.in/api/users.json`);
      const userDetails = response.data.users.find(
        (user) => user.id === parseInt(id),
        console.log("rewsponse in profile", response),
      );
      setUser(userDetails);
      console.log("user in profile:", user);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
    console.log("user in useeffect: ", user);
  }, []);

  const navigate = useNavigate();
  const [activeText, setActiveText] = useState("Profile");

  const handleTextClick = (text) => {
    if (activeText === text) {
      // If the same text is clicked again, do nothing
      return;
    }
    setActiveText(text);
    console.log("activetext: ", activeText);
  };
  return (
    <Box mt={9} w="full">
      <Flex>
        <Box
          mt={3}
          ml={3}
          height="full"
          width="240px"
          overflow="auto"
          rounded="3xl"
          bg="linear-gradient(180deg, rgba(58,90,200,1) 0%, rgba(78,73,199,1) 50%, rgba(97,57,200,1) 100%)"
        >
          <Grid pl={8} alignContent="space-around" h="3xl" overflow="auto">
            <GridItem
              color="white"
              textAlign="left"
              justifyContent="space-around"
            >
              <Wrap overflow="auto" mt={2}>
                <WrapItem>
                  <Text
                    mb={2}
                    onClick={() => {
                      navigate(`/profile/${user.id}`);
                      handleTextClick("Profile");
                    }}
                  >
                    Profile
                  </Text>
                </WrapItem>
                <Spacer />
                <WrapItem alignSelf="right">
                  {activeText === "Profile" && (
                    <IconButton
                      borderLeftRadius="3xl"
                      borderRightRadius={0}
                      size="sm"
                      bg="white"
                      icon={
                        <ChevronRightIcon fontSize="1.5rem" color="gray.300" />
                      }
                    />
                  )}
                </WrapItem>
                <Divider mr={9} />
              </Wrap>

              <Wrap overflow="auto" mt={2}>
                <WrapItem>
                  <Text
                    mb={2}
                    onClick={() => {
                      navigate(`/post`);
                      handleTextClick("Post");
                    }}
                  >
                    Post
                  </Text>
                </WrapItem>
                <Spacer />
                <WrapItem alignSelf="right">
                  {activeText === "Post" && (
                    <IconButton
                      borderLeftRadius="3xl"
                      borderRightRadius={0}
                      size="sm"
                      bg="white"
                      icon={
                        <ChevronRightIcon fontSize="1.5rem" color="gray.300" />
                      }
                    />
                  )}
                </WrapItem>
                <Divider mr={9} />
              </Wrap>

              <Wrap overflow="auto" mt={2}>
                <WrapItem>
                  <Text
                    mb={2}
                    onClick={() => {
                      navigate(`/gallery`);
                      handleTextClick("Gallery");
                    }}
                  >
                    Gallery
                  </Text>
                </WrapItem>
                <Spacer />
                <WrapItem alignSelf="right">
                  {activeText === "Gallery" && (
                    <IconButton
                      borderLeftRadius="3xl"
                      borderRightRadius={0}
                      size="sm"
                      bg="white"
                      icon={
                        <ChevronRightIcon fontSize="1.5rem" color="gray.300" />
                      }
                    />
                  )}
                </WrapItem>
                <Divider mr={9} />
              </Wrap>

              <Wrap overflow="auto" mt={2}>
                <WrapItem>
                  <Text
                    mb={2}
                    onClick={() => {
                      navigate(`/todo`);
                      handleTextClick("ToDo");
                    }}
                  >
                    ToDo
                  </Text>
                </WrapItem>
                <Spacer />
                <WrapItem alignSelf="right">
                  {activeText === "ToDo" && (
                    <IconButton
                      borderLeftRadius="3xl"
                      borderRightRadius={0}
                      size="sm"
                      bg="white"
                      icon={
                        <ChevronRightIcon fontSize="1.5rem" color="gray.300" />
                      }
                    />
                  )}
                </WrapItem>
                <Divider mr={9} />
              </Wrap>
            </GridItem>
          </Grid>
        </Box>

        <VStack mt={6} w="full">
          <Navbar
            name={user.name}
            pic={user.profilepicture}
            page={activeText}
          />
          {activeText === "Profile" && <UserDetailsCard user={user} mt={4} />}
          {activeText === "Post" && <ComingSoon />}
          {activeText === "Gallery" && <ComingSoon />}
          {activeText === "ToDo" && <ComingSoon />}
        </VStack>
      </Flex>
    </Box>
  );
}

export default Pages;
