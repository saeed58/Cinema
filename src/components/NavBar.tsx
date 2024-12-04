import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import logo from "../assets/img/logo.png";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} height="80px"></Image>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
