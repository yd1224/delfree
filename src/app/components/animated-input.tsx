import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { forwardRef } from "react";

export interface AnimatedInputProps {
  isShown: boolean;
  handleSearchClick: () => void;
  handleBackArrowClick: () => void;
  handleClearSearch: () => void;
}

const AnimatedInput = forwardRef<HTMLInputElement, AnimatedInputProps>(
  (
    { isShown, handleSearchClick, handleBackArrowClick, handleClearSearch },
    ref
  ) => {
    const MotionBox = motion(Box);

    return (
      <Flex
        display={{
          sd: "none",
        }}
      >
        {!isShown && (
          <Box
            position="absolute"
            display={{
              sd: "none",
            }}
            top="23px"
            right="40px"
            onClick={handleSearchClick}
            cursor="pointer"
          >
            <Image alt="Search icon" src="/icons/search.svg" boxSize={33} />
          </Box>
        )}

        {isShown && (
          <MotionBox
            position="absolute"
            top="19px"
            right="5%"
            width="100%"
            initial={{ width: 0 }}
            animate={{ width: "90%" }}
            transition={{ duration: 0.5 }}
          >
            <InputGroup>
              <InputLeftElement width="12%" onClick={handleBackArrowClick}>
                <Image
                  src="./icons/right-arrow.svg"
                  w={4}
                  h={5}
                  alt="Arrow icon"
                  cursor="pointer"
                />
              </InputLeftElement>
              <Input
                ref={ref}
                bg="white"
                placeholder="Search our products"
                borderRadius="full"
                border="1px solid #e7e7e7"
                _hover={{
                  borderColor: "#ffa500",
                }}
                _focus={{
                  borderColor: "#ffa500",
                  boxShadow: "0 0 0 1px #ffa500",
                }}
              />
              <InputRightElement
                width={{
                  us: "25%",
                  sm: "18%",
                }}
              >
                <Flex alignItems="center">
                  <Image
                    alt="Clear searchn parameters icon"
                    src="/icons/close.svg"
                    boxSize={{
                      us: 4,
                      md: 5,
                    }}
                    onClick={handleClearSearch}
                    cursor="pointer"
                  />
                  <Box height="25px" mx={2} borderLeft="1px solid grey"></Box>
                  <Image
                    alt="Search icon"
                    src="/icons/search.svg"
                    boxSize={{
                      us: 5,
                      md: 6,
                    }}
                    cursor="pointer"
                  />
                </Flex>
              </InputRightElement>
            </InputGroup>
          </MotionBox>
        )}
      </Flex>
    );
  }
);

export default AnimatedInput;
