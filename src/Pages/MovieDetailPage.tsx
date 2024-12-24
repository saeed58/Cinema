import useTmovie from "@/Hooks/Tamashakhoneh/useTMovie";
import {
 
  Box,
  defineStyle,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  StatLabel,
  StatRoot,
  StatValueText,
  Text,
} from "@chakra-ui/react";
import {  useParams } from "react-router";
import { AiFillStar, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Avatar } from "@/components/ui/avatar";

const director = defineStyle({
  rounded : '80px',
  backgroundColor : 'green.900'
})
const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, error, isFetching } = useTmovie(Number(id));

  if (isFetching) return <Spinner />;

  if (error) throw error;
  const cover = "url(" + movie?.cover_path + ")";
  return (
    <>
      <Box
        minH="30vh"
        bgColor={"gray.700"}
        bgSize="cover"
        bgImage={cover}
        backgroundPosition='center'
        color="white"
        shadow=""
      >
        <Box minH="30vh" p={7} backdropFilter= 'blur(50px)' bg='gray.800/70'  >
          <SimpleGrid minChildWidth="200px" gap="10px" mb={3}>
            <Box mb={2}>
              <Text
                fontSize={{ base: "18px", md: "52px" }}
                fontWeight="bold"
                fontFamily="iransans_rtl"
              >
                {movie?.title_fa}
              </Text>
            </Box>
            <Box>
              <Flex>
                <StatRoot>
                  <StatLabel color="white"> دوبله</StatLabel>
                  <StatValueText>
                    {movie?.is_double ? (
                      <AiOutlineCheck color='green' />
                    ) : (
                      <AiOutlineClose color="red" />
                    )}
                  </StatValueText>
                </StatRoot>

                <StatRoot>
                  <StatLabel color="white"> بازدید</StatLabel>
                  <StatValueText>{movie?.visit_count}</StatValueText>
                </StatRoot>

                <StatRoot>
                  <StatLabel color="white"> IMDB Rank</StatLabel>
                  <StatValueText>
                    {movie?.imdb_rank}
                    <AiFillStar color="orange" size="30px" />
                  </StatValueText>
                </StatRoot>
              </Flex>
            </Box>
          </SimpleGrid>
          <Box  >
            <Image src={movie?.cover_path} fit='cover' rounded='5px'/>
            <SimpleGrid minChildWidth='50px' >
              {movie?.screenshots.map(screenshot => <Image src={screenshot}  />)}
            </SimpleGrid>
          </Box>
          <Text mt= {{base: '10', md: '20'}}>{movie?.description}</Text>
        </Box>
        
      </Box>
      <Box>
        <SimpleGrid gap={8} minChildWidth='150px' m={5}>
          {movie?.casts.map(cast => 

              <Box>
                <HStack key={cast.fullname_en} gap='1' css={cast.cast_role.en == 'Director' ? director : ''}>
                  <Avatar
                  name={cast.fullname_fa}
                  src={cast.profile_picture}
                  width='80px'
                  height='80px'
                />
                <Stack>
                  <Text fontWeight='medium'>{cast.fullname_fa}</Text>
                  <Text color="fg.muted" textStyle="sm">{cast.cast_role.fa}</Text>
                </Stack>
                </HStack>
              </Box>
            
          )}
          </SimpleGrid>
        </Box>
    </>
  );
};

export default MovieDetailPage;
