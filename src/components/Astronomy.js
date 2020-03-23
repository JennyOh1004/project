import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";

class Astronomy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };
    //이걸 reducers 에 넣어주기
  }

  componentWillMount() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=bHXdeJkOdPSycslSNZRPptAtkbV9ZJTwxA40m1x2"
    )
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data));
      })
      .catch(error => console.log(err));
  }

  render() {
    const { getAPOD } = this;
    return (
      <div>
        <AstronomyCard getAPOD={getAPOD} />
      </div>
    );
  }
}

export default Astronomy;
