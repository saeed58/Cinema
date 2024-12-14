import { Flex, HStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

interface Props {
  onSerach: (searchText: string) => void;
}

const SearchBox = ({ onSerach }: Props) => {
  return (
    <Flex
      as="header"
     
      zIndex="200"
    >
      <HStack padding="5px" >
        <SearchInput onSerach={onSerach} />
      </HStack>
    </Flex>
  );
};

export default SearchBox;
