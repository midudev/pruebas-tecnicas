import { InputRange, SectionPagesRange } from ".";

interface Props {
  handleChangePages: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pages: number;
}

export const BooksPages = ({ handleChangePages, pages }: Props) => {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

return (
    <>
      <form onSubmit={handleSubmit}>
        <SectionPagesRange>
          <label htmlFor="pages">Paginas</label> 
          <InputRange
            type="range"
            min='0'
            max='1200'
            value={pages}
            onChange={handleChangePages}
            id="pages" 
          />
          <p>{pages}</p>
        </SectionPagesRange>
      </form>
    </>
  );
};
