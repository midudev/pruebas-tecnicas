import {CSSProperties} from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
const override: CSSProperties = {
  display: "flex",
  margin: "0 auto",
  borderColor: "red",
};
function Spinner() {
  return (
    <div className="spinner">
      <PacmanLoader
        color={"#36d7b7"}
        loading={true}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <span>Loading...</span>
    </div>
  );
}
export default Spinner;
