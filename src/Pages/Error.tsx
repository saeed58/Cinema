import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";
import { Text } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
          <Heading>Oops </Heading>
          <Text>
            {isRouteErrorResponse(error)
              ? "This Page Dose not Exist"
              : "An Unexpected Error Occured"}
          </Text>
      </Box>
    </>
  );
};

export default Error;
