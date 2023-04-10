import "./Main3.css";

function Main3() {
  return (
    <div className="caseStudyContainer">
      <div className="caseStudyContentContainer">
        <img
          className="caseStudytLeftImage"
          src={require("../../../img/kavach.png")}
          alt=""
          //   height={"52px"}
          //   width={"2px"}
        />
        <div
          className="caseStudyContentText"
          style={{ padding: "2%", display: "block" }}
        >
          <h2 style={{ marginBottom: "2%", fontSize: "3rem" }}>
            What is KAVACH- 2023 ?
          </h2>
          <h3 style={{ marginBottom: "5%", fontSize: "1.2rem" }}>
            Working toward empowering these imperative notions of our society,
            MoE's Innovation Cell, AICTE along with Bureau of Police Research
            and Development BPR&D MHA and Indian Cybercrime Coordination Centre
            I4C MHA have launched KAVACH-2023 a unique national Hackathon to
            identify innovative concepts and technology solutions for addressing
            the security challenges of the 21st century faced by our
            intelligence agencies. KAVACH-2023 is conceived to challenge
            innovative minds to conceptualize ideas and framework in the domain
            of cyber security using artificial intelligence, deep learning,
            machine learning, automation, big data and cloud computing.
            KAVACH-2023 is a unique opportunity for higher institutional
            Students and Startups in India to submit their innovative
            ideas/concepts under the different problem statements.
            <br />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Main3;
