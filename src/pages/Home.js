import React from "react";

// Rappel : lorsqu'on utilise une balise <img> en React, l'image doit
// être stockée dans public (d'après FScratch)
export default function Home() {
  return (
    <div className="home">
      <h1>My progression</h1>
      <div>Welcome to this site dedicated to your programming progression</div>
      <br />
      <img src="imageDev.jpg" alt="Un développeur" />
    </div>
  );
}
