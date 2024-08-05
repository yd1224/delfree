import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export interface LogoProps {
  isShown: boolean;
}

export default function Logo({ isShown }: LogoProps) {
  return (
    <>
      {!isShown && (
        <Flex alignItems="center">
          <Link href="/">
            <Image src="images/logo.png" alt="logo" w={"120px"} h={"40px"} />
          </Link>
        </Flex>
      )}
    </>
  );
}
