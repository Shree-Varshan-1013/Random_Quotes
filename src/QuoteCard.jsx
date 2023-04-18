import { useState, useEffect } from "react";
import axios from "axios";
import { FaTwitter, FaTumblr, FaQuoteLeft, FaCopyright } from "react-icons/fa";
import "./quotes.css";
import randomColor from "randomcolor";
import Fantasy from "./assets/header.png";
import Typewriter from "typewriter-effect";

const QuoteCard = () => {

  const [data, setData] = useState([]);
  const [color, setColor] = useState("#44d7a8");

  var real = randomColor();

  const GetQuote = () => {

    setColor(real);

    axios.get("http://api.quotable.io/random").then((response) => {
      setData(response.data);
    });
    document.body.style.backgroundColor = color;
  };

  useEffect(() => {
    GetQuote();
  }, []);

  return (
    <>
      <div id="quote-box">
        <img src={Fantasy} />
        <div id="text">
          <FaQuoteLeft />
          <span style={{ marginLeft: "1rem" }}>
            <Typewriter
              options={{
                strings: [`${data.content}`],
                autoStart: true,
                loop: false,
                delay: 'natural'
              }}
            />
          </span>
        </div>
        <div id="author">
          <span>-{data.author}</span>
        </div>
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${data.content}`}
            id="tweet-quote"
            target="_blank"
          >
            <button className="link-button">
              <FaTwitter />
            </button>
          </a>
          <button className="link-button">
            <a>
              <FaTumblr />
            </a>
          </button>
          <button id="new-quote" onClick={GetQuote}>
            New Quote
          </button>
        </div>
      </div>
      {/* <footer>shree</footer> */}
    </>
  );
};

export default QuoteCard;
