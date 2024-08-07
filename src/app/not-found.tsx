"use client";

import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import CustomButton from "./components/custom-button";
import Logo from "./components/logo";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/", { scroll: false });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="6"
      textAlign="center"
    >
      <Box>
        <Box
          pb="30px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Logo width="170px" height="60px" />
        </Box>
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          Page Not Found
        </Text>
        <Text fontSize="md" color="gray.600" mb="6">
          Oops! The page you are looking for does not exist.
        </Text>
        <CustomButton text="Go Back to Home" onClick={handleGoBack} />
      </Box>
    </Box>
  );
}
