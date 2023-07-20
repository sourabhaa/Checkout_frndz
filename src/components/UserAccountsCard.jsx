import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import SingeUserAccounts from "./SingeUserAccounts";
const baseURL = "https://panorbit.in/api/users.json";

const UserAccountsCard = () => {
  const [userDetails, setUserDetails] = useState([]);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(baseURL);
      setUserDetails(response.data.users);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <Card rounded="3xl" width={600} overflow="auto" maxH={500}>
      <CardHeader bg="gray.100" roundedTop="3xl" height={200}>
        <Heading
          as="h3"
          size="md"
          fontWeight="medium"
          textAlign="center"
          pt={4}
          color="blackAlpha.800"
        >
          Select an account
        </Heading>
      </CardHeader>

      {/* User Listing */}
      <CardBody px={6} pt={1}>
        {userDetails.map((user) => (
          <SingeUserAccounts user={user} key={user.id} />
        ))}
      </CardBody>
    </Card>
  );
};

export default UserAccountsCard;
