import React from "react";
import { Link } from "react-router-dom";
import './homeModule.css'

function Home(props) {
  return (
    <div className="HomaeMain">
      <div className="UniName">
        <h1>University of Asia</h1>
      </div>
      <div className="pagelinks">
        <h1>
          <Link to="/signup">SignUp</Link>
        </h1>
        <br />
        <h1>
          <Link to="/login">LogIn</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    </div>
  );
}

export default Home;
