import { Box, Grid, GridItem, HStack, Image, Input } from "@chakra-ui/react";
import logo from "./assets/img/logo.png";
import { ColorModeButton } from "./components/ui/color-mode";
import { BsSearch } from "react-icons/bs";
import { InputGroup } from "./components/ui/input-group";
import CategoriesList from "./react-query/CategoriesList";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          md: "250px 1fr",
        }}
        gap="0"
      >
        <GridItem area="nav">
          <HStack padding="10px">
            <Image src={logo} height="80px"></Image>
            
            <InputGroup flex='fit-content' startElement={<BsSearch />}>
              <Input placeholder="Smooth Movie ..." borderRadius='50px' />
            </InputGroup>
            
            <ColorModeButton />
          </HStack>
        </GridItem>

        <GridItem area="aside"  hideBelow="md" >
        <Box maxH="82vh" overflowY="auto" scrollBehavior="smooth" scrollbar='hidden'>
          <CategoriesList />
        </Box>
        </GridItem>

        <GridItem area="main" bg="blue">
          main
        </GridItem>
        
      </Grid>
      
    </>
  );
};

export default App;
