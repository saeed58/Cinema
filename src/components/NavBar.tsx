import { Flex, HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import logo from "../assets/img/logo.png";
import SearchInput from "./SearchInput";

interface Props {
  onSerach: (searchText: string) => void;
}

const NavBar = ({ onSerach }: Props) => {
  return (
    <Flex as="header" position="fixed" w="100%" zIndex='200' bgColor='black'>
      <HStack padding="10px">
        <Image src={logo} height="80px"></Image>
        <SearchInput onSerach={onSerach} />
        <ColorModeButton />
      </HStack>
    </Flex>
  );
};

export default NavBar;
