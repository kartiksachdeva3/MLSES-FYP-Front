import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      Ohh! You land on wrong Page. No such page Exits.
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default NoMatch;
