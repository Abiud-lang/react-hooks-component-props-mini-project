import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const coffeeCups = "☕️".repeat(Math.ceil(minutes / 5));
  const bentoBoxes = "🍱".repeat(Math.ceil(minutes / 10));
  const minutesToRead = minutes < 30 ? coffeeCups : bentoBoxes;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{minutesToRead} {minutes} min read</p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
