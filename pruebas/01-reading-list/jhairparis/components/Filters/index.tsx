import { useGlobalState } from "@/lib/globalContext";
import { HStack, IconButton, Tooltip } from "@chakra-ui/react";
import { AiOutlineRollback } from "react-icons/ai";
import { useEffect, useState } from "react";
import { filterAvailable, filterData } from "@/types/context";
import FilterSlider from "./FilterSlider";
import FilterGenre from "./FilterGenre";

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
        disabled={data.isFilter[0] === filterAvailable.genre}
      />
      <FilterGenre
        genres={data.genre}
        state={genre || data.isFilter[1]!.genre}
        setState={setGenre}
        disabled={data.isFilter[0] === filterAvailable.page}
      />
      <Tooltip hasArrow label="Volver a cargar los datos">
        <IconButton
          colorScheme="blue"
          variant="ghost"
          aria-label="Volver a cargar los datos"
          icon={<AiOutlineRollback />}
          onClick={() => setFromJson()}
        />
      </Tooltip>
    </HStack>
  );
};

export default Filters;
