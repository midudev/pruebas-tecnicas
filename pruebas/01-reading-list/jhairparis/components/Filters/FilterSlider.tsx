import { filterData } from "@/types/context";
import {
  Button,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

type FilterSliderProps = {
  min: number;
  max: number;
  state: filterData["page"];
  setState: (val: filterData["page"]) => void;
  disabled: boolean;
};

const FilterSlider = ({
  min,
  max,
  state,
  setState,
  disabled,
}: FilterSliderProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme="blue" variant="ghost" isDisabled={disabled}>
          # Paginas
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{`Libros con paginas entre ${
          Array.isArray(state) ? state[0] + " y " + state[1] : min + " y " + max
        }`}</PopoverHeader>
        <PopoverBody>
          <RangeSlider
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label={["min", "max"]}
            colorScheme="blue"
            defaultValue={[min, max]}
            min={min}
            max={max}
            step={50}
            value={state === -99 ? [min, max] : undefined}
            onChangeEnd={(v) => setState([v[0], v[1]])}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </PopoverBody>
        <PopoverFooter>
          <Button onClick={() => setState(-99)}>Clear</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default FilterSlider;
