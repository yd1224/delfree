import { Product } from "@/lib/types";
import { Box, Image, Text, Badge, HStack, AspectRatio } from "@chakra-ui/react";

export interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const stockColor =
    product.quantity > 10
      ? "green.500"
      : product.quantity > 0
      ? "yellow.500"
      : "red.500";

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "scale(1.05)", cursor: "pointer" }}
      transition="all 0.3s ease-in-out"
      bg="white"
      border="1px solid #e7e7e7"
    >
      <AspectRatio ratio={1}>
        <Image
          src={product.productImageUrl}
          alt={product.productName}
          objectFit="cover"
        />
      </AspectRatio>

      <Box p="6">
        <HStack justifyContent="space-between">
          <Badge borderRadius="full" px="2" colorScheme="red">
            New
          </Badge>
          <Text fontSize="sm" color={stockColor}>
            {product.quantity > 0
              ? `${product.quantity} in stock`
              : "Out of stock"}
          </Text>
        </HStack>

        <Text
          mt="1"
          fontWeight="semibold"
          as="h2"
          lineHeight="tight"
          isTruncated
        >
          {product.productName}
        </Text>

        <Text mt="2" color="gray.600" isTruncated>
          This is a product description is every thing I need for this
        </Text>

        <HStack mt="2" align="center">
          <Text fontWeight="bold" fontSize="xl">
            ${product.price}
          </Text>
          <Text fontSize="sm" color="gray.600">
            / unit
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}
