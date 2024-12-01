import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{ 
        base : "1fr",
        md : "250px 1fr"
       }}
      gap="0"
    >
      <GridItem area='nav' bg="red">Nav</GridItem>

      <GridItem area='aside' bg="orange" hideBelow="md">
        aside
      </GridItem>

      <GridItem area='main' bg="blue">main</GridItem>
    </Grid>
  );
};

export default App;
