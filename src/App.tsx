import { Box, Grid, GridItem, Text, Stack } from "@chakra-ui/react";
import MovieAllList from "./components/MovieAllList";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Results } from "./entities/Results";
import NavBar from "./components/NavBar";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Results | null>(null);

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
          <NavBar />
        </GridItem>

        <GridItem area="aside" hideBelow="md">
          <Box
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
            maxH="82vh"
            overflowY="auto"
            scrollBehavior="smooth"
            scrollbar="hidden"
          >
            <Stack marginBottom={5}>
              <Text fontSize="xl">
                {selectedGenre ? "ژانر " + selectedGenre.source.name_fa : null}
              </Text>
            </Stack>
            <MovieAllList selectedGenre={selectedGenre} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
