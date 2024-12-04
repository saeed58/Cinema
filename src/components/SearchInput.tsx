import { Input } from "@chakra-ui/react"
import { InputGroup } from "./ui/input-group"
import { BsSearch } from "react-icons/bs"


const SearchInput = () => {
  return (
    <InputGroup flex="fit-content" startElement={<BsSearch />}>
    <Input
      placeholder="جستچوی فیلم و سریال در ژانر های مختلف  "
      borderRadius="50px"
    />
  </InputGroup>
  )
}

export default SearchInput