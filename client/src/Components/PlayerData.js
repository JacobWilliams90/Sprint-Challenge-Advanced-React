import React, { Component } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default class PlayerData extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getData = () => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        if (this._isMounted) {
          this.setState({
            data: res.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this._isMounted = true;
    this.getData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <Div>
        {this.state.data.map((data, index) => (
          <PlayerCard data={data} key={index} />
        ))}
      </Div>
    );
  }
}
