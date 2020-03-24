import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
// import AstronomyCard from "./AstronomyCard";

class Astronomy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: []
    };
    //이걸 reducers 에 넣어주기
  }

  componentDidMount() {
    console.log("componentWillMount!!");
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=bHXdeJkOdPSycslSNZRPptAtkbV9ZJTwxA40m1x2"
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          datas: data
        })
      );
    // .catch(error => console.log(err));
  }

  render() {
    const { datas } = this.state;

    console.log("잘되니?", datas);
    return (
      <div>
        <AstronomyCard datas={datas} />
      </div>
    );
  }
}

export default Astronomy;
