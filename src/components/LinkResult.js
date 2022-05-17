import axios from "axios";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../css/main.css";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="load">Loading...</p>;
  }

  if (error) {
    return <p className="err">Something wrong</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="linkresult">
          <div className="result">
            <p>{shortenLink}</p>
            <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
              <button className={copied ? "copied" : ""}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      )}
    </>
  );
};

export default LinkResult;
