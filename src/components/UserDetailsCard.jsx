import axios from "axios";

import {
  VStack,
  Box,
  Avatar,
  Text,
  SimpleGrid,
  GridItem,
  Divider,
  Flex,
  HStack,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { GoogleMap, Marker } from "@react-google-maps/api";
import { LoadScript } from "@react-google-maps/api";

function UserDetailsCard({ user }) {
  const mapContainerStyle = {
    width: "120%",
    height: "300px",
    borderRadius: "20px",
  };

  const center = {
    lat: parseFloat(user.address.geo.lat),
    lng: parseFloat(user.address.geo.lng),
  };

  useEffect(() => {
    console.log("in details");
  });

  return (
    <Flex mt={8}>
      <Box m={0}>
        <VStack w={350} m={0}>
          {/* Profile Picture */}
          <Box m={0}>
            <Avatar
              name={user.name}
              src={user.profilepicture}
              w="180px"
              h="180px"
            ></Avatar>
          </Box>
          {/* Name */}
          <Text
            textAlign="center"
            fontSize="lg"
            fontWeight="semibold"
            color="#545454"
          >
            {user.name}
          </Text>
          <SimpleGrid columns={2} fontSize="lg">
            {/* Psersonal Info */}
            <VStack
              alignItems="flex-end"
              mr={1}
              fontWeight="normal"
              color="#9A9A9A"
            >
              <GridItem textAlign="right" w={120} rowSpan={2}>
                <Text pb={2}>Username : </Text>
              </GridItem>
              <GridItem>
                <Text pb={2}>e-mail : </Text>
              </GridItem>
              <GridItem>
                <Text pb={2}>Phone : </Text>
              </GridItem>
              <GridItem>
                <Text>Website : </Text>
              </GridItem>
            </VStack>

            <VStack
              alignItems="flex-start"
              ml={1}
              fontWeight="bold"
              color="#545454"
            >
              <GridItem textAlign="left" w={120} rowSpan={2}>
                <Text pb={2} textAlign="left" justifySelf="flex-start">
                  {user.username}
                </Text>
              </GridItem>
              <GridItem>
                <Text pb={2}>{user.email} </Text>
              </GridItem>
              <GridItem>
                <Text pb={2}>{user.phone} </Text>
              </GridItem>
              <GridItem>
                <Text>{user.website} </Text>
              </GridItem>
            </VStack>
          </SimpleGrid>
          <Divider />
          {/* Company Info */}
          <Text textAlign="center" fontSize="lg" pb={1}>
            Company
          </Text>

          <SimpleGrid columns={2} fontSize="lg">
            <VStack
              alignItems="flex-end"
              mr={1}
              fontWeight="normal"
              color="#9A9A9A"
            >
              <GridItem textAlign="right" w={120} rowSpan={2}>
                <Text pb={3}>Name : </Text>
              </GridItem>
              <GridItem>
                <Text pb={7}>Catchphrase :</Text>
              </GridItem>
              <GridItem>
                <Text pb={3}>bs : </Text>
              </GridItem>
            </VStack>

            <VStack
              alignItems="flex-start"
              ml={1}
              fontWeight="semibold"
              color="#545454"
            >
              <GridItem textAlign="left" w={180} rowSpan={2}>
                <Text pb={2} textAlign="left" justifySelf="flex-start">
                  {user.company.name}
                </Text>
              </GridItem>
              <GridItem>
                <Text pb={2}>{user.company.catchPhrase} </Text>
              </GridItem>
              <GridItem>
                <Text pb={2}>{user.company.bs} </Text>
              </GridItem>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Box>
      {/* <Divider ml={3} orientation="vertical" h="full" size="1px"></Divider> */}
      <Box ml={5}>
        <Stack>
          <HStack>
            <Divider
              ml={3}
              orientation="vertical"
              h="full"
              size="1px"
            ></Divider>
          </HStack>
          {/* <StackDivider aria-orientation="vertical"></StackDivider> */}
          {/* Address Info */}
          <HStack>
            <VStack
              w={600}
              align="flex-start"
              px={10}
              fontWeight="normal"
              color="#9A9A9A"
            >
              <Text ml={3}>Address:</Text>
              <SimpleGrid pr={7} fontSize="lg" columns={2}>
                <GridItem textAlign="right">
                  <Text pb={1}>Street :</Text>
                  <Text pb={1}>Suite : </Text>
                  <Text pb={1}>City : </Text>
                  <Text pb={1}>Zipcode : </Text>
                </GridItem>
                <GridItem
                  ml={2}
                  textAlign="left"
                  fontWeight="bold"
                  color="#545454"
                >
                  <Text pb={1}>{user.address.street} </Text>
                  <Text pb={1}>{user.address.suite} </Text>
                  <Text pb={1}>{user.address.city} </Text>
                  <Text pb={1}>{user.address.zipcode} </Text>
                </GridItem>
              </SimpleGrid>
              {/* Google Map */}
              <LoadScript googleMapsApiKey="AIzaSyC6rtq53SQmt57jsch5v3a6RILdo0pgxxY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={10}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </VStack>
          </HStack>
        </Stack>
      </Box>
    </Flex>
  );
}

export default UserDetailsCard;
