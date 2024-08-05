import { Box, Container, Text } from "@chakra-ui/react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/utils/getQueryClient";
import { getProducts } from "@/lib/api";
import Footer from "./components/footer";
import Header from "./components/header";
import { ProductList } from "./components/products-list";
import { notFound } from "next/navigation";

export default async function HomePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["paginatedData"],
    queryFn: () => getProducts(),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  const initialData = queryClient.getQueryData(["paginatedData"]);

  if (!initialData) {
    notFound();
  }

  return (
    <>
      <Header />
      <Box as="main">
        <Container
          maxW="container.xl"
          py={8}
          px={{
            us: "20px",
            sd: "50px",
          }}
        >
          <Text
            fontSize={{ base: "20px", sm: "30px" }}
            textAlign="center"
            mb={6}
            fontWeight="bold"
          >
            Home
          </Text>
          <HydrationBoundary state={dehydratedState}>
            <ProductList initialData={initialData} />
          </HydrationBoundary>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
