import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export interface LogoProps {
  isShown?: boolean;
  width?: string;
  height?: string;
}

export default function Logo({ isShown, width, height }: LogoProps) {
  return (
    <>
      {!isShown && (
        <Flex alignItems="center">
          <Link href="/">
            <Image
              src="images/logo.png"
              alt="logo"
              w={width ?? "120px"}
              h={height ?? "40px"}
            />
          </Link>
        </Flex>
      )}
    </>
  );
}
