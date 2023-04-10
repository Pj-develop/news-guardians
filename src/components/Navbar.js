import "./Navbar.css";
import Lottie from "lottie-react";
import newsletter from "../lotties/newsletter.json";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";

function Navbar({ setLoading }) {
  const homeLocation = useMatch("/");
  const analyzerLocation = useMatch("/geoanalyzer");
  const latestLocation = useMatch("/latest");
  const soilErosionLocation = useMatch("/soilerosion");

  return (
    <>
      <div
        className="navcontainer"
        style={{
          width: "100%",
          justifyContent: "center",
          height: "80px",
          position: "fixed",
          display: "flex",
          zIndex: "1000",
        }}
      >
        <nav
          className="custom-nav"
          style={{
            position: "fixed",
            width: "85%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#202024",
            marginTop: "1%",
            borderRadius: "100px",
            height: "70px",
            boxShadow: " 2px 5px 5px 2px rgba(0, 0, 0, .2)",
          }}
        >
          <Lottie
            animationData={newsletter}
            style={{ height: "60px", width: "100px", marginLeft: "0px" }}
            height={10}
            width={10}
          />
          <h1
            className="mint"
            style={{
              height: "50px",
              marginLeft: "2%",
              marginRight: "auto",
              color: "white",
              marginTop: "auto",
              cursor: "pointer",
            }}
          >
            News Guardians
          </h1>

          <Link to="/" className={`button-9${homeLocation ? "-active" : ""}`}>
            Home
          </Link>
          <Link
            to="/soilerosion"
            className={`button-9${soilErosionLocation ? "-active" : ""}`}
          >
            Neutralizer
          </Link>
          <Link
            to="/geoanalyzer"
            className={`button-9${analyzerLocation ? "-active" : ""}`}
          >
            Try Guardian's News{" "}
          </Link>
          <Link
            to="/latest"
            className={`button-9${latestLocation ? "-active" : ""}`}
          >
            Support
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
