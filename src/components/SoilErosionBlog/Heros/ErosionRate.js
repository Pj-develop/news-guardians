import "./ErosionRate.css";
import { useState } from "react";

function ErosionRate() {
  const [mass, setMass] = useState();
  const [timePeriod, setTimePeriod] = useState();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOnMassChange = (event) => {
    setMass(event.target.value);
  };

  const handleOnTimeChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const handleOnSoilClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    let calculatedRate = mass / timePeriod;
    setResult(Math.round(calculatedRate * 100) / 100);
  };

  return (
    <div className="erosionRateContainer">
      <div className="erodedRateFormContainer">
        <div className="erodedRateCalculatorForm">
          <h2 className="erodedRateCalculatorInputHeading">
            IP ADDRESS TARCKER
          </h2>
          <input
            type="text"
            placeholder="In Kilograms"
            className="erodedRateFormInput"
            value={mass}
            onChange={handleOnMassChange}
          />
          <h2 className="erodedRateCalculatorInputHeading">PHONE NO TRACER </h2>
          <input
            type="text"
            placeholder="In Years"
            className="erodedRateFormInput"
            value={timePeriod}
            onChange={handleOnTimeChange}
          />
          <div className="erodedRateFormButtonContainer">
            <button
              className="erodedRateFormButton"
              onClick={handleOnSoilClick}
            >
              Trace
            </button>
          </div>
          {loading === true ? (
            <>
              <div className="three-body" style={{ marginTop: "6%" }}>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
              </div>
            </>
          ) : (
            <>
              <div className="erodedRateFormResult">
                <h1 className="erodedRateFormResult">
                  Tracing Succesful {result} or Failed
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="erodedRateTextContainer">
        <h1
          style={{ color: "white" }}
          className="erodedRateTextContainerHeading"
        >
          IP ADDRESS TARCKING
        </h1>
        <h2 style={{ color: "white" }} className="erodedRateTextContainerText1">
          IP ADRESS IS TRACKING TO KNOW THE SPAMMER ADDRESSS.{" "}
        </h2>
        <h1
          style={{ color: "white" }}
          className="erodedRateTextContainerHeading"
        >
          PHONE TRACKING
        </h1>
        <h2 style={{ color: "white" }} className="erodedRateTextContainerText1">
          PHONE TRACKING TO KNOW THE SPAMMER ADDRESSS.{" "}
        </h2>
      </div>
    </div>
  );
}

export default ErosionRate;
