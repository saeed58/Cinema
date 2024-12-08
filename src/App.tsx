import { Box, Grid, GridItem, Text, Stack , Highlight} from "@chakra-ui/react";
import MovieAllList from "./components/MovieAllList";
import GenreList from "./components/GenreList";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { CloseButton } from "./components/ui/close-button";
import { Genres } from "./entities/Genres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [searchText, SetSearchText] = useState<string | null>(null);

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
          <NavBar  onSerach={(searchText) => SetSearchText(searchText)} />
        </GridItem>

        <GridItem area="aside" hideBelow="md">
          <Box
            position='fixed'
            marginTop='100px'
            marginRight={5}
            maxH="82vh"
            overflowY="auto"
            scrollBehavior="smooth"
            scrollbar="hidden"
          >
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
            {/* <CategoriesList /> */}
          </Box>
        </GridItem>

        <GridItem area="main">
          <Box
            // maxH="82vh"
            marginTop='100px'
            overflowY="auto"
            scrollBehavior="smooth"
            // scrollbar="hidden"
          >
            <Stack marginBottom={5}>
              <Text fontSize="xl">
                {searchText ? <CloseButton onClick={()=>SetSearchText(null)} /> : null}
                <Highlight
                  query={searchText ? searchText : ''}
                  styles={{
                    px: "0.5",
                    color: "orange.fg",
                  }}
                >
                   {searchText ? "با موضوع " + searchText  : ""}
                </Highlight>
                
                

                
                {searchText && selectedGenre && " در "}
                {selectedGenre ? <CloseButton onClick={()=>setSelectedGenre(null)} /> : null}
                <Highlight
                  query={selectedGenre ? selectedGenre.name_fa : ''}
                  styles={{
                    px: "0.5",
                    color: "orange.fg",
                  }}
                >
                  {selectedGenre ? "ژانر " + selectedGenre.name_fa : ''}
                </Highlight>



                
                
              </Text>
            </Stack>
            <MovieAllList
              selectedGenre={selectedGenre}
              searchText={searchText}
            />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
