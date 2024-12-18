import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSerach: (searchText: string) => void;
}

const SearchInput = ({ onSerach }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        ref.current && onSerach(ref.current.value);
      }}
    >
      <InputGroup flex="fit-content" startElement={<BsSearch />}>
        <Input
          w="300px"
          name="search"
          ref={ref}
          placeholder="جستجوی فیلم و سریال در ژانر های مختلف  "
          borderRadius="50px"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
