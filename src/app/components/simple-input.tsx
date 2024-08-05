import React, { forwardRef } from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export interface SimpleInputProps {
  handleClearSearch: () => void;
}

const SimpleInput = forwardRef<HTMLInputElement, SimpleInputProps>(
  ({ handleClearSearch }, ref) => {
    return (
      <Flex
        display={{
          us: "none",
          sd: "block",
        }}
      >
        <InputGroup>
          <Input
            ref={ref}
            bg="white"
            placeholder="Search our products"
            width={{
              us: "100%",
              sm: "300px",
              md: "400px",
            }}
            borderRadius="full"
            border={"1px solid #e7e7e7"}
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
              us: "100%",
              sm: "25%",
              md: "20%",
            }}
          >
            <Flex alignItems="center">
              <Image
                alt="Clear search icon"
                src="/icons/close.svg"
                boxSize={{
                  us: 3,
                  sm: 4,
                  md: 5,
                }}
                onClick={handleClearSearch}
              />
              <Box height="25px" mx={2} borderLeft={"1px solid grey"}></Box>
              <Image
                alt="Search icon"
                src="/icons/search.svg"
                boxSize={{
                  us: 2,
                  sm: 5,
                  md: 6,
                }}
              />
            </Flex>
          </InputRightElement>
        </InputGroup>
      </Flex>
    );
  }
);

export default SimpleInput;
