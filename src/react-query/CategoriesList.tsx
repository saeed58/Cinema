import { List, ListItem } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Category {
    id: number;
    name_fa: string;
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
      <List.Root fontSize='sm' fontWeight='200'>
          {data?.map((cat) =>(
            <ListItem key={cat.id}>
                {cat.name_fa}
            </ListItem>
          ) )}
      </List.Root>

    )
};

export default CategoriesList;
