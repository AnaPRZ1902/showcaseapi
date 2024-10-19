"use client";

import { useState, useEffect } from "react";

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
    };
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Random Quote</h1>
      {quote ? (
        <div>
          <p>"{quote.content}"</p>
          <p>- {quote.author}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quote;
