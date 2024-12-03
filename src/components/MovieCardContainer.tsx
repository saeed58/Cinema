import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return <Box overflow="hidden" rounded="3xl">{children}</Box>;
};

export default GameCardContainer;
