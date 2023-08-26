import { BookList } from "./Icons";

type infoProps = {
  text: string;
  secondText: string;
};

export const Info = (props: infoProps) => {
  const { text, secondText } = props;

  return (
    <section className="p-4 flex justify-center flex-col items-center">
      <h1 className="font-bold text-3xl">{text}</h1>
      <div className=" flex relative">
        <h2 className="font-semibold  text-xl flex items-center ">
          {secondText}
        </h2>
        <a href="#readingList" className="h-9 flex items-center ">
          <BookList />
        </a>
      </div>
    </section>
  );
};
