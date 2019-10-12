import React, { Component } from "react";
import axios from "axios";
import PlayerCard from './PlayerCard'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default class PlayerData extends Component {
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
        console.log(res)
        this.setState({
          data: res.data
        });
        console.log(this.state.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData()
  }

  render() {
    return <Div>
      {this.state.data.map((data, index) => (
        <PlayerCard data={data} key={index}/>
      ))}
    </Div>;
  }
}
