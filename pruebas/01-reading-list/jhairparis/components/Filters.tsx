import { useGlobalState } from "@/lib/globalContext";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
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
      <Text fontSize="md">Filtrar por: </Text>
      <div className="w-[50%]">
        <Text fontSize="sm">paginas</Text>
        {/* <Slider aria-label="slider-ex-1" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider> */}
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Filters;
