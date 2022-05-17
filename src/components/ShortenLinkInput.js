import { useState } from "react";
import "../css/main.css";

const ShortenLinkInput = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="shortLink" id="shorten">
      <div className="shorten">
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <a href="#" className="btn" onClick={handleClick}>
          Shorten it!
        </a>
      </div>
    </div>
  );
};

export default ShortenLinkInput;
