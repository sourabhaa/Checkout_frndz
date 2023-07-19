import axios from "axios";

import {
  VStack,
  Box,
  Avatar,
  Text,
  SimpleGrid,
  GridItem,
  Divider,
  HStack,
  Flex,
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
      <Box>
        <VStack w={450} pr={10}>
          <Box>
            <Avatar
              name={user.name}
              src={user.profilepicture}
              w="180px"
              h="180px"
            ></Avatar>
          </Box>
          <Text textAlign="center" fontSize="lg">
            {user.name}
          </Text>
          <SimpleGrid columns={2} fontSize="lg">
            <GridItem textAlign="right" w={180}>
              <Text>Username : </Text>
              <Text>e-mail : </Text>
              <Text>Phone : </Text>
              <Text>Website : </Text>
            </GridItem>
            <GridItem textAlign="left" w={270}>
              <Text> {user.username} </Text>
              <Text> {user.email} </Text>
              <Text> {user.phone} </Text>
              <Text> {user.website} </Text>
            </GridItem>
          </SimpleGrid>
          <Divider />
          <Text textAlign="center" fontSize="md">
            Company
          </Text>
          <SimpleGrid columns={2} fontSize="lg">
            <GridItem textAlign="right" w={180}>
              <Text>Name : </Text>
              <Text>Catchphrase : </Text>
              <Text>bs : </Text>
            </GridItem>
            <GridItem mr={2} textAlign="left" w={290}>
              <Text> {user.company.name} </Text>
              <Text> {user.company.catchPhrase} </Text>
              <Text> {user.company.bs} </Text>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Box>
      <Divider orientation="vertical" h="full"></Divider>
      <Box w={670}>
        <VStack w={600} align="flex-start" px={10}>
          <Text ml={3}>Address:</Text>
          <SimpleGrid pr={7} fontSize="lg" columns={2}>
            <GridItem textAlign="right">
              <Text>Street :</Text>
              <Text>Suite : </Text>
              <Text>City : </Text>
              <Text>Zipcode : </Text>
            </GridItem>
            <GridItem ml={2} textAlign="left">
              <Text>{user.address.street} </Text>
              <Text>{user.address.suite} </Text>
              <Text>{user.address.city} </Text>
              <Text>{user.address.zipcode} </Text>
            </GridItem>
          </SimpleGrid>
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
      </Box>
    </Flex>
  );
}

export default UserDetailsCard;
