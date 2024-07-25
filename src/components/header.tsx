import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={20}
      paddingY={10}
      backgroundColor={"#f8f8f8"}
      borderBottom={"1px solid #e7e7e7"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Link href="/">
          <Image src="images/logo.png" alt="logo" w={20} h={10} />
        </Link>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          display={"flex"}
          w={"80%"}
          paddingRight={"5px"}
          h={"35px"}
          border={"1px solid #ccc"}
          borderRadius={"20px"}
          overflow={"hidden"}
          justifyContent={"space-between"}
          backgroundColor={"white"}
        >
          <Box w={"100%"} display={"flex"} justifyContent={"space-between"}>
            {/* <Button class="close-btn back-btn" @onclick="() => ToggleInputBar()">
                        <span class="material-symbols-outlined">
                            arrow_back
                        </span>
                    </Button> */}
            {/* <input type="text" placeholder="Search our products" @bind="searchQuery">
                    <button class="close-btn" @onclick="DeleteQuery">
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </button> */}
          </Box>
          {/* <button class="search-btn" @onclick="() => ToggleInputBar()">
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </button> */}
        </Box>
      </Box>
      {/* <div class="header__right">
          //{" "}
          <div class="shopping-cart">
            //{" "}
            <div class="shopping-cart-symbol">
              //{" "}
              <span
                class="material-symbols-outlined"
                style="font-size:30px !important;"
              >
                // shopping_cart //{" "}
              </span>
              //{" "}
            </div>
            //{" "}
            <div class="shopping-cart-text">
              // <span>10</span>
              //{" "}
            </div>
            //{" "}
          </div>
          //{" "}
        </div> */}
    </Box>
  );
}
