import { useGlobalState } from "@/lib/globalContext";
import {
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { CloseButton } from "@chakra-ui/react";

type s = string | undefined | null;
const Filters = () => {
  const { data, filter } = useGlobalState();
  const [value, setValue] = useState<s>(undefined);

  useEffect(() => {
    if (value) {
      filter(value);
    } else if (value === null) {
      filter(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="flex flex-row gap-2">
      <div>
        <HStack spacing="24px">
          {value || (data.isFilter[0] && data.isFilter[1] != "") ? (
            <>
              <Text>{value || data.isFilter[1]}</Text>
              <CloseButton onClick={() => setValue(null)} />
            </>
          ) : (
            <Menu id="menu">
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                id="menu-button"
              >
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
          <div>
            <Text fontSize="md">
              {data.total - data.nRead} libros disponibles
            </Text>
            <Text fontSize="sm">{data.nRead} en lista de lectura</Text>
          </div>
        </HStack>
      </div>
    </div>
  );
};

export default Filters;
