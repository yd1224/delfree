"use client";

import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import Basket from "./basket";
import Logo from "./logo";
import SimpleInput from "./simple-input";
import AnimatedInput from "./animated-input";

export default function Header() {
  const [isInputVisible, setInputVisible] = useState(false);

  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setInputVisible(!isInputVisible);
  };

  const handleBackArrowClick = () => {
    setInputVisible(false);
  };

  const handleClearSearch = () => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement).value = "";
    }
  };

  return (
    <Box
      as="header"
      bg="#f8f8f8"
      height={"80px"}
      py={4}
      borderBottom={"1px solid #e7e7e7"}
      alignContent={"center"}
    >
      <Container
        px={{
          us: "20px",
          sd: "50px",
        }}
        maxWidth="container.xl"
      >
        <Flex
          alignItems="center"
          alignContent={"center"}
          justifyContent="space-between"
        >
          <Logo isShown={isInputVisible} />

          <Flex>
            <SimpleInput ref={inputRef} handleClearSearch={handleClearSearch} />

            <AnimatedInput
              isShown={isInputVisible}
              handleSearchClick={handleSearchClick}
              handleBackArrowClick={handleBackArrowClick}
              ref={inputRef}
              handleClearSearch={handleClearSearch}
            />
          </Flex>
          <Flex>
            <Basket />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
