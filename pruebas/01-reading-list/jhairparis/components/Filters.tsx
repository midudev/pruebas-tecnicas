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
import read from "@/lib/readJson";

const Filters = () => {
  const { data, filter, setGlobalState } = useGlobalState();
  const [value, setValue] = useState<filterData["genre"]>(undefined);

  const Rollback = () => {
    const { main, genre, copy } = read();
    setGlobalState({
      library: main.library,
      read: [],
      total: main.library.length,
      nRead: 0,
      genre,
      origin: copy,
      isFilter: [false, ""],
    });
  };

  useEffect(() => {
    if (value) {
      filter(filterAvailable.genre, { genre: value });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <HStack spacing="24px" mb="2">
      {typeof value === "string" ? (
        <>
          <Text>{value || data.isFilter[1]}</Text>
          <CloseButton onClick={() => setValue(-99)} />
        </>
      ) : (
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Genero
          </MenuButton>
          <MenuList>
            {Object.keys(data.genre).map((v) => (
              <MenuItem key={v} onClick={() => setValue(v)}>
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
          onClick={() => Rollback()}
        />
      </Tooltip>
    </HStack>
  );
};

export default Filters;
