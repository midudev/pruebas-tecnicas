import { Menu, MenuButton, MenuList, Button, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import type { GenreType, filterData } from "@/types/context";
import { AiOutlineClose } from "react-icons/ai";

type FilterGenreType = {
  state: filterData["genre"];
  setState: (val: filterData["genre"]) => void;
  genres: GenreType;
  disabled: boolean;
};

const FilterGenre = ({
  state,
  setState,
  genres,
  disabled,
}: FilterGenreType) => {
  return (
    <>
      {typeof state === "string" ? (
        <Button
          colorScheme="blue"
          variant="ghost"
          aria-label="Volver a cargar los datos"
          rightIcon={<AiOutlineClose />}
          onClick={() => setState(-99)}
        >
          {state}
        </Button>
      ) : (
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="blue"
            variant="ghost"
            rightIcon={<ChevronDownIcon />}
            isDisabled={disabled}
          >
            Genero
          </MenuButton>
          <MenuList>
            {Object.keys(genres).map((v) => (
              <MenuItem key={v} onClick={() => setState(v)}>
                {v}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default FilterGenre;
