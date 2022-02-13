import React from "react";
import { useParams } from "react-router-dom";
import { moviesData } from "../moviesData";
import { Link } from "react-router-dom";

import "./style.css";

const Description = () => {
  const { id } = useParams();
  const movie = moviesData.find((el) => el.id === parseInt(id));

  return (
    <div>
      <img className="img-route" src={movie.image} alt={movie.name} />
      <h1 className="Movie-name">{movie.name}</h1>
      <h2 className="date">{movie.date}</h2>
      <h2 className="desc2">{movie.description}</h2>

      <iframe
        src={movie.embTrailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="back">
        <Link to="/" className="btn-back">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Description;
