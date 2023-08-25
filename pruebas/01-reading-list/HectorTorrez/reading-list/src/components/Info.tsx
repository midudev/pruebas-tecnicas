type infoProps = {
  text: string;
  secondText: string;
};

export const Info = (props: infoProps) => {
  const { text, secondText } = props;

  return (
    <section className="p-4 flex justify-center flex-col items-center">
      <h1 className="font-bold text-3xl">{text}</h1>
      <h2 className="font-semibold text-xl">{secondText}</h2>
    </section>
  );
};
