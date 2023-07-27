import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { useBooksContext } from "../hooks/useBooksContext"
import { useBooksContextFilter } from "../hooks/useBooksContextFilter"

type props = {}
const Filter: React.FC<props> = ({}) => {
  const [title, setTitle] = useState("")
  const [sliderValue, setSliderValue] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)
  const { genres, maxPages } = useBooksContext()
  const { filter, setFilter } = useBooksContextFilter()

  const handlerGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(prev => ({ ...prev, genres: e.target.value }))
  }
  const handlerPagesChange = (page: number) => {
    setFilter(prev => ({ ...prev, pages: page }))
    setSliderValue(page)
  }

  const handlerSearchTitle = () => {
    setFilter(prev => ({ ...prev, title: title }))
  }
  const handlerSearchTitleEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter") {
      handlerSearchTitle()
    }
  }
  const bg = useColorModeValue("white", "gray.800")
  return (
    <Stack bg={bg} p={4}>
      <FormControl>
        <FormLabel>Search</FormLabel>
        <InputGroup>
          <Input
            placeholder="Drácula"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyUpCapture={handlerSearchTitleEnter}
          />
        </InputGroup>
      </FormControl>
      <Button colorScheme="teal" size={"sm"} onClick={handlerSearchTitle}>
        Search
      </Button>
      <Divider />
      <FormControl>
        <FormLabel>Genre</FormLabel>
        <Select onChange={handlerGenreChange} value={filter.genres}>
          <option>all</option>
          {genres.map((genre, index) => (
            <option key={index}>{genre}</option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Pages</FormLabel>
        <Slider
          defaultValue={0}
          min={0}
          max={maxPages}
          onChange={handlerPagesChange}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          colorScheme="teal"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="teal.500"
            color="white"
            placement="top"
            isOpen={showTooltip}
            label={`${sliderValue}`}
          >
            <SliderThumb bg={"teal"} />
          </Tooltip>
        </Slider>
      </FormControl>
    </Stack>
  )
}

export default Filter
