function SavedUi({ number }: any) {
  const randomColors = [
    "#fff700",
    "#FF5E5E",
    "#00FF75",
    "#39DBFF",
    "#FFB443",
    "#fff700",
    "#FF5E5E",
    "#00FF75",
    "#39DBFF",
    "#FFB443",
    "#fff700",
    "#FF5E5E",
    "#00FF75",
    "#39DBFF",
    "#FFB443",
  ];

  return (
    <section className="savedUi">
      <span>S</span>
      <span>A</span>
      <span>V</span>
      <span>E</span>
      <span>D</span>
      <span
        style={{
          backgroundColor: randomColors[number],
        }}
        className="savedUiNumber"
      >
        {number}
      </span>
    </section>
  );
}

export default SavedUi;
