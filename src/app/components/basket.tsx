import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  Image,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
// import DeliveryForm from "./DeliveryForm";
// import { BasketTypes } from "../../types";
// import BasketType from "./BasketType";
import { useState } from "react";
// import { useBasketContext } from "../../contexts/BasketContext";
// import { StatusForm } from "./StatusForm";

//TODO: Implement Basket component
const Basket = () => {
  //   const [selectedBaketType, setSelectedBasketType] =
  //     useState<BasketTypes>("basket");
  //   const [orderId, setOrderId] = useState<number>();
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const { productsCount } = useBasketContext();

  return (
    <Box
      position={{
        us: "fixed",
        md: "relative",
      }}
      top={{ us: "calc(100vh/2.5)", md: "unset" }}
      right={{ us: "5px", md: "unset" }}
      boxShadow={{
        us: "2px 7px 11px rgba(0,0,0,.28)",
        md: "none",
      }}
      bg={{
        us: "white",
        md: "transparent",
      }}
      borderTopLeftRadius={10}
      borderBottomLeftRadius={10}
      boxSize={50}
      zIndex={100}
    >
      <Center
        cursor="pointer"
        boxSize={50}
        borderTopLeftRadius={10}
        borderBottomLeftRadius={10}
        // onClick={onOpen}
      >
        <Image boxSize={33} src={"icons/cart.svg"} />
        {/* {productsCount ? */}
        {/* ( */}
        <Text
          pos="absolute"
          top={"-5px"}
          right={0}
          borderRadius="50%"
          color="#ffa500"
          fontSize={"14px"}
          fontWeight={"bold"}
        >
          {/* {productsCount} */}
          10
        </Text>
        {/* ) : null} */}
      </Center>
      {/* <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        blockScrollOnMount={false}
        isFullHeight={false}
        autoFocus={false}
        size="sm"
      > */}
      {/* <DrawerContent>
          {selectedBaketType === "basket" && (
            <BasketType setSelectedBasketType={setSelectedBasketType} />
          )}
          {selectedBaketType === "delivery" && (
            <DeliveryForm
              setOrderId={
                setOrderId as React.Dispatch<React.SetStateAction<number>>
              }
              setSelectedBasketType={setSelectedBasketType}
            />
          )}
          {selectedBaketType === "orderResponse" && (
            <StatusForm
              orderId={orderId}
              setSelectedBasketType={setSelectedBasketType}
            />
          )}
        </DrawerContent> */}
      {/* </Drawer> */}
    </Box>
  );
};

export default Basket;
