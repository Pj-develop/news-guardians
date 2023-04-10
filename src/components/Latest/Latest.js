// import { useState, useEffect } from "react";
import "./Latest.css";
// import defaultImage from "../../img/soilDefault.jpg";

function Latest() {
  //   const [news, setNews] = useState(null);

  //   useEffect(() => {
  //     const getNews = async () => {
  //       const url =
  //         "https://newsapi.org/v2/everything?q=plants+soil&sortBy=relevance&language=en&excludeSources=fox-news&pageSize=50&apiKey=f280b085be63467a9029bd906bff32d1";
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setNews(data);
  //     };
  //     getNews();
  //   }, []);

  // const handleClick = (url) => {
  //     window.open = (url);
  // }

  //   const handleImageError = (event) => {
  //     event.target.src = defaultImage;
  //   };

  return (
    <>
      <header>
        <h1>Support Page</h1>
      </header>
      <main>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns, feel free to contact us at:
          </p>
          <ul>
            <li>Email: Priyanshu.k4444@gmail.com</li>
            <li>Phone: 91-9518476761</li>
          </ul>
        </section>
        <section>
          <h2>Frequently Asked Questions</h2>
          <dl>
            <dt>Where to deploy it ?</dt>
            <dd>React App with Node Js </dd>
            <dt>How to update?</dt>
            <dd>
              We can update it thorugh the contained files in the SRC Folder.
            </dd>
            <dt>Is it effective than currently available solution?</dt>
            <dd>
              Yes, It is much more good than available system and has such s
              good system to track down everthing.
            </dd>
          </dl>
        </section>
        <section>
          <h2>Meet Our Team</h2>
          <div class="team-member">
            <img src="team-member-1.jpg" alt="Team Member 1" />
            <h3>Neelesh Pandey</h3>
            <p>Email: john.doe@yourcompany.com</p>
            <p>Phone: 555-555-1234</p>
          </div>
          <div class="team-member">
            <img src="team-member-2.jpg" alt="Team Member 2" />
            <h3>Priyanshu Jha</h3>
            <p>Email: jane.smith@yourcompany.com</p>
            <p>Phone: 555-555-5678</p>
          </div>
          <div class="team-member">
            <img src="team-member-3.jpg" alt="Team Member 3" />
            <h3>Asim Rana</h3>
            <p>Email: david.lee@yourcompany.com</p>
            <p>Phone: 555-555-9012</p>
          </div>
          <div class="team-member">
            <img src="team-member-4.jpg" alt="Team Member 4" />
            <h3>Sambit Gosh</h3>
            <p>Email: samantha.johnson@yourcompany.com</p>
            <p>Phone: 555-555-3456</p>
          </div>
          <div class="team-member">
            <img src="team-member-5.jpg" alt="Team Member 5" />
            <h3>LPU University</h3>
            <p>Email: michael.brown@yourcompany.com</p>
            <p>Phone: 555-555-7890</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Guardians Hub. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Latest;
