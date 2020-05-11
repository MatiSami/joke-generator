import React from "react";
// import PropTypes from 'prop-types';
import "./joke.modules.scss";

const Joke = ({ type, setup, delivery, joke }) => {
  if (type === "twopart") {
    console.log("działa twopart");
    return (
      <>
        <div className="joke-block">
          <p className="joke-question">{setup}</p>
          <p className="joke-answer">{delivery}</p>
        </div>
      </>
    );
  } else {
    console.log("działa single");
    console.log("type");

    return (
      <>
        <div className="joke-block">
          <p className="joke-question">{joke}</p>
        </div>
      </>
    );
  }
};

export default Joke;
