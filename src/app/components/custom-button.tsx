import { Button } from "@chakra-ui/react";

export interface PaginationButtonProps {
  text: string;
  onClick?: () => void;
}

export default function CustomButton({ text, onClick }: PaginationButtonProps) {
  return (
    <Button
      border="1px solid #ddd"
      py="20px"
      px="60px"
      backgroundColor="white"
      _focus={{
        backgroundColor: "#ffa500",
      }}
      _hover={{
        backgroundColor: "#ffa500",
      }}
      width="150px"
      transition="background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
