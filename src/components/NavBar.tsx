import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import logo from "../assets/img/logo.png";
import SearchInput from "./SearchInput";

interface Props{

  onSerach : (searchText : string) => void;
}

const NavBar = ({onSerach} : Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} height="80px"></Image>
      <SearchInput onSerach={onSerach}/>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
