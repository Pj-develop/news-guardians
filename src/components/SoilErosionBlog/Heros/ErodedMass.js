import "./ErodedMass.css";
import { useState } from "react";

function ErodedMass() {
  const [area, setArea] = useState();
  const [soilHeight, setSoilHeight] = useState();
  const [soilDensity, setSoilDensity] = useState();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOnAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleOnHeightChange = (event) => {
    setSoilHeight(event.target.value);
  };

  const handleOnDensityChange = (event) => {
    setSoilDensity(event.target.value);
  };

  const handleOnSoilClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setResult(area * soilHeight * soilDensity);
  };

  return (
    <div className="erodedMassContainer">
      <div className="erodedMassTextContainer">
        <h1
          style={{ color: "white" }}
          className="erodedMassTextContainerHeading"
        >
          SOCIAL MEDIA AUTO POPULATOR
        </h1>
        <h2 style={{ color: "white" }} className="erodedMassTextContainerText1">
          Auto POPULATOR
        </h2>
        <h4
          style={{ color: "white" }}
          className="erodedMassTextContainerExample"
        >
          For example, WEBSITE LIST ! FACEBOOK 2. INSTAGRAM 3. JDSKDJ D S4n
          DSDDSD s ds da d ad ad d ad asd ad a e etc
        </h4>
      </div>
      <div className="erodedMassFormContainer">
        <div className="erodedMassCalculatorForm">
          <h2 className="erodedMassCalculatorInputHeading">
            FB HANDLE ID & PASSS
          </h2>
          <input
            type="text"
            placeholder="In Square Metres"
            className="erodedMassFormInput"
            value={area}
            onChange={handleOnAreaChange}
          />
          <h2 className="erodedMassCalculatorInputHeading">
            INSTA HANDLE ID & PASSS
          </h2>
          <input
            type="text"
            placeholder="In Metres"
            className="erodedMassFormInput"
            value={soilHeight}
            onChange={handleOnHeightChange}
          />
          <h2 className="erodedMassCalculatorInputHeading">
            TWITTER HANDLE ID & PASSS
          </h2>
          <input
            type="text"
            placeholder="In Kilograms Per Cubic Meter"
            className="erodedMassFormInput"
            value={soilDensity}
            onChange={handleOnDensityChange}
          />
          <div className="erodedMassFormButtonContainer">
            <button
              className="erodedMassFormButton"
              onClick={handleOnSoilClick}
            >
              Auto-populate
            </button>
          </div>
          {loading === true ? (
            <>
              <div class="three-body" style={{ marginTop: "6%" }}>
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
              </div>
            </>
          ) : (
            <>
              <div className="erodedMassFormResult">
                <h1 className="erodedMassFormResult">
                  Auto-populate Succesful {result} Or Failed
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ErodedMass;
