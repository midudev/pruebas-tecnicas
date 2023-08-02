import { useGlobalState } from "@/lib/globalContext";
import {
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineRollback } from "react-icons/ai";
import { useEffect, useState } from "react";
import { CloseButton } from "@chakra-ui/react";
import { filterAvailable, filterData } from "@/types/context";
import FilterSlider from "./FilterSlider";

const Filters = () => {
  const { data, filter, setFromJson } = useGlobalState();
  const [genre, setGenre] = useState<filterData["genre"]>(undefined);
  const [page, setPage] = useState<filterData["page"]>(undefined);

  useEffect(() => {
    if (genre) {
      filter(filterAvailable.genre, { genre: genre });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre]);

  useEffect(() => {
    if (page) {
      filter(filterAvailable.page, { page: page });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <HStack spacing="24px" mb="2">
      <FilterSlider
        min={0}
        max={data.max}
        state={page}
        setState={setPage}
      />
      {typeof genre === "string" ? (
        <>
          <Text>{genre || data.isFilter[1]?.genre}</Text>
          <CloseButton onClick={() => setGenre(-99)} />
        </>
      ) : (
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Genero
          </MenuButton>
          <MenuList>
            {Object.keys(data.genre).map((v) => (
              <MenuItem key={v} onClick={() => setGenre(v)}>
                {v}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
      <Tooltip hasArrow label="Volver a cargar los datos">
        <IconButton
          aria-label="Volver a cargar los datos"
          icon={<AiOutlineRollback />}
          onClick={() => setFromJson()}
        />
      </Tooltip>
    </HStack>
  );
};

export default Filters;
