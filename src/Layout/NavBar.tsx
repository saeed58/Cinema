import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";
import {
  Box,
  Flex,
  IconButton,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useToggle } from "@reactuses/core";
import { SlMenu } from "react-icons/sl";
import { FaXmark} from "react-icons/fa6";



const NavBar = () => {
  const [on, toggle] = useToggle(true);
  return (
    <Box pos='fixed' w='full' zIndex='250' >
      <Box >
        <Flex

          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.300", "gray.900")}
          align={"center"}
          
        >
          <Flex flex={{ base: 1 }} display={{ base: "flex", md: "none" }}>
            {/* <Text
              flex={{ base: 1, md: 0 }}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
                menu

            </Text> */}

            <IconButton variant="outline" onClick={() => toggle(!on)}>
              {on ? <SlMenu /> : <FaXmark size={15} />}
            </IconButton>
          </Flex>

          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>

            <HStack>
                <Text>TrueMe</Text>
              </HStack>
          </Flex>

          <Flex flex={{ base: 1, md: 1 }} ml={{ base: -2 }} justify="end">
            <ColorModeButton />
          </Flex>
        </Flex>
      </Box>

    </Box>
  );
};

export default NavBar;
