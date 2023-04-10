import "./Causes.css";
import Lottie from "lottie-react";
import email from "../../../lotties/email.json";
import ring from "../../../lotties/ringing.json";
import msg from "../../../lotties/message.json";

function Causes() {
  return (
    <div className="causesContainer">
      <div
        className="causesHeadingContainer"
        style={{
          fontSize: "3.5rem ",
          paddingTop: "7%",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3.5rem ", color: "white" }}>
          Mitigate the Fake News
        </h1>
      </div>
      <div
        className="factsContainer"
        style={{ display: "flex", textAlign: "center" }}
      >
        <div className="firstContainer" style={{ width: "33%" }}>
          <Lottie
            animationData={email}
            style={{ height: "100%", width: "100%", marginTop: "8px" }}
            height={400}
            width={400}
          />
          <h1 style={{ color: "white" }}>Send Email in Bulk</h1>
        </div>
        <div
          className="secondContainer"
          style={{ width: "33%", textAlign: "center" }}
        >
          <Lottie
            animationData={ring}
            style={{ height: "100%", width: "70%", margin: "auto" }}
            height={400}
            width={400}
          />
          <h1 style={{ color: "white" }}>Auto - Call</h1>
        </div>
        <div className="thirdcontainer" style={{ width: "33%" }}>
          <Lottie
            animationData={msg}
            style={{ height: "100%", width: "70%", margin: "auto" }}
            height={400}
            width={400}
          />
          <h1 style={{ color: "white" }}>Send Bulk Messages</h1>
        </div>
      </div>
    </div>
  );
}

export default Causes;
