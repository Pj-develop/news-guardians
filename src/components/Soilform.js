import "./Soilform.css";

function Soilform({ setResultSummary }) {
  return (
    <>
      <style></style>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="search-container1">
        <input id="inp" className="inp" type="text" placeholder="Write..." />
        <button type="submit">Search</button>
      </div>
      <div className="button-container">
        <button className="secondary-button">Your News to Verify</button>
      </div>
      <p className="quote">
        “Disinformation is the brainchild of a self-absorbed behavior.”
      </p>
      <div className="footer-container">
        <ul className="footer-list">
          <li className="footer-list-item active">Privacy and Cookies</li>
          <li className="footer-list-item active">Legal</li>
          <li className="footer-list-item active">Advertise</li>
          <li className="footer-list-item active">Help/Feedback</li>
        </ul>
      </div>
    </>
  );
}

export default Soilform;
