import { Box, Grid, GridItem, Text, Stack, Highlight } from "@chakra-ui/react";
import MovieAllList from "./components/MovieAllList";
import GenreList from "./components/GenreList";
import { useState } from "react";
import SearchBox from "./components/SearchBox";
import { CloseButton } from "./components/ui/close-button";
import { Genres } from "./entities/Genres";
import { useColorModeValue } from "./components/ui/color-mode";

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
          md: "150px 1fr",
        }}
        gapY="60px"
      >
        <GridItem area="aside" hideBelow="md">
          <Box
            position="fixed"
            marginRight={1}
            maxH="82vh"
            overflowY="auto"
            scrollBehavior="smooth"
            scrollbar='hidden'
          >
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
            {/* <CategoriesList /> */}
          </Box>
        </GridItem>

        <GridItem area="main">
          <Box
            // maxH="82vh"

            overflowY="auto"
            scrollBehavior="smooth"
            // scrollbar="hidden"
          >
            <GridItem
              area="nav"
              position="fixed"
              w="full"
              zIndex="190"
              bg={useColorModeValue("white", "gray.900")}
            >
              <SearchBox onSerach={(searchText) => SetSearchText(searchText)}  />
              <Stack >
                <Text fontSize="sm">
                  {searchText ? (
                    <CloseButton onClick={() => SetSearchText(null)} />
                  ) : null}
                  <Highlight
                    query={searchText ? searchText : ""}
                    styles={{
                      px: "0.5",
                      color: "orange.fg",
                    }}
                  >
                    {searchText ? "با موضوع " + searchText : ""}
                  </Highlight>

                  {searchText && selectedGenre && " در "}
                  {selectedGenre ? (
                    <CloseButton onClick={() => setSelectedGenre(null)} />
                  ) : null}
                  <Highlight
                    query={selectedGenre ? selectedGenre.name_fa : ""}
                    styles={{
                      px: "0.5",
                      color: "orange.fg",
                    }}
                  >
                    {selectedGenre ? "ژانر " + selectedGenre.name_fa : ""}
                  </Highlight>
                </Text>
              </Stack>
            </GridItem>
            <GridItem  mt={(searchText || selectedGenre) ? "100px" : "60px"}>
              <MovieAllList
                selectedGenre={selectedGenre}
                searchText={searchText}
              />
            </GridItem>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
