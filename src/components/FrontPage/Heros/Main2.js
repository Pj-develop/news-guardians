import "./Main2.css";
import Lottie from "lottie-react";
import Cycling from "../../../lotties/Cycling.json";
import mapss from "../../../lotties/mapofspread.json";

function Main2() {
  return (
    <div className="blogContainer">
      <h1
        style={{
          paddingTop: "7%",
          fontSize: "3.5rem",
          width: "100%",
          display: "inline-flex",
          margin: "auto",
          justifyContent: "center",
          color: "white",
        }}
      >
        Fake News Spreads Like A Virus
        <Lottie
          animationData={Cycling}
          style={{ height: "70px" }}
          height={100}
          width={100}
        />
      </h1>
      <Lottie
        animationData={mapss}
        style={{
          width: "70%",
          marginTop: " 20px",
          height: "70%",
          marginLeft: "15%",
          backgroundColor: "white",
        }}
        height={100}
        width={100}
      />
    </div>
  );
}

export default Main2;
