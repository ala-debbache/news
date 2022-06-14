import React from "react";

export default function Item({item}) {
  return (
    <div className="Item">
      <h2 className="title">{item.title}</h2>
      <p className="description">{item.description}</p>
      <a className="link" href={item.url} target="_blank" rel="noreferrer">Go to article</a>
      <img className="img" src={item.urlToImage} alt={item.title} />
    </div>
  );
}
