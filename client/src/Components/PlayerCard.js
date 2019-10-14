import React from "react";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 200px;
  margin: 5px;
  padding: 2px;
`;

const PlayerCard = props => {
  return (
    <Div>
      <h1>{props.data.name}</h1>
      <h3>{props.data.country}</h3>
      <p>Searches: {props.data.searches}</p>
    </Div>
  );
};

export default PlayerCard;
