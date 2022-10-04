import React, { useState } from "react";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [sentence, setSentence] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSentence(`It is currently 20°C in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{sentence}</h2>
    </div>
  );
}
