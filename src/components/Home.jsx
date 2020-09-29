import React from "react";

const Home = (props) => {
  return (
    <div className="homepage">
      <h3>Pokemon App</h3>
      <div className="pokemones">
        <div className="pokemon">
          {props.list.species && (
            <div>
              <img src={props.list.sprites.front_default} />
              {props.list.species.name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
