"use client";

import { useState, useEffect } from "react";

const Cat = () => {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    const fetchCatImage = async () => {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      setCatImage(data[0].url);
    };
    fetchCatImage();
  }, []);

  return (
    <div>
      <h1>Random Cat</h1>
      {catImage ? (
        <img src={catImage} alt="Random Cat" style={{ width: '300px', height: '300px' }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Cat;
