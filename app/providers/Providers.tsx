"use client";
import { ChakraProvider } from "@chakra-ui/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
