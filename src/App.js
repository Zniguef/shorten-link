import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LinkResult from "./components/LinkResult";
import ShortenLinkInput from "./components/ShortenLinkInput";
import "./css/main.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div className="container">
        <Header />
        <div className="section1">
          <div className="text">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="btn">
              <a href="#shorten">Get Started</a>
            </div>
          </div>
          <img src="https://i.ibb.co/GJVQShr/illustration-working.png" alt="illustration image" />
        </div>
      </div>
      <div className="statistic">
        <ShortenLinkInput setInputValue={setInputValue} />
        <LinkResult inputValue={inputValue} />
        <div className="container">
          <div className="s-1">
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="s-2">
            <div className="st">
              <i class="fa-solid fa-chart-column"></i>
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="nd">
              <i class="fa-solid fa-gauge"></i>
              <h4>Detailed Records</h4>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="rd">
              <i class="fa-solid fa-palette"></i>
              <h4>Fully Customizable</h4>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mfooter">
        <h1>Boost your links today</h1>
        <a href="#shorten">Get Started</a>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
