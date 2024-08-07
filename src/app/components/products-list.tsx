"use client";

import { SimpleGrid } from "@chakra-ui/react";
import { getProducts } from "@/lib/api";
import { GetProductsResponse, Product } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./product-card";
import { notFound } from "next/navigation";
import PaginationLarge from "./pagination-large";
import PaginationSmall from "./pagination-small";

export const ProductList = () => {
  const { data, isLoading, isError } = useQuery<GetProductsResponse>({
    queryKey: ["paginatedData"],
    queryFn: () => getProducts(),
    refetchOnMount: false,
  });

  if (!data) {
    notFound();
  }

  console.log(data);
  return (
    <>
      <SimpleGrid
        columns={{ us: 2, smmd: 3, lg: 4, "2xl": 5 }}
        spacing={{ us: 3, sd: 4, md: 6, lg: 8 }}
      >
        {data.products.length > 0 &&
          data.products.map((product: Product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
      </SimpleGrid>
      {/* PaginationLarge is shown from 640 px */}
      <PaginationLarge />
      {/* PaginationSmall is shown up to 640 px */}
      <PaginationSmall />
    </>
  );
};
