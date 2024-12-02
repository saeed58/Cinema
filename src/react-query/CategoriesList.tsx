import { Tooltip } from "@/components/ui/tooltip";
import {  Image, List, ListItem } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Category {
  id: number;
  name_fa: string;
  image_path: string;
}

interface Categories {
  data: Category[];
}

const CategoriesList = () => {
  const fetchCategories = () =>
    axios
      .get<Categories>("https://api.tamashakhoneh.ir/v4/categories")
      .then((res) => res.data.data);

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return (
    <List.Root fontSize="sm" fontWeight="200" variant="plain" marginRight={2}>
      {data?.map((cat) => (
        <ListItem key={cat.id}>
          <Tooltip showArrow content={cat.name_fa}>

            <Image
              src={cat.image_path}
              maxWidth="230px"
              alt={cat.name_fa}
              marginBottom={3}
            />
          
          </Tooltip>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default CategoriesList;
