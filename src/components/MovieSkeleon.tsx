
import { Card } from "@chakra-ui/react/card"
import { Skeleton, SkeletonText } from "./ui/skeleton"




const MovieSkeleon = () => {
  return (
    <Card.Root>
        <Skeleton height="265px" />
        <SkeletonText noOfLines={3} gap="4" />
    </Card.Root>

  )
}

export default MovieSkeleon