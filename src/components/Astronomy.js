import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
import fetchData from "../actions/fetch_data";

class Astronomy extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     datas: []
  //   };
  // }

  componentDidMount() {
    const { action } = this.props;
    console.log("datas", this.props.datas);
    console.log("componentDidMount!!");
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=bHXdeJkOdPSycslSNZRPptAtkbV9ZJTwxA40m1x2"
    )
      .then(response => {
        console.log("첫번째 then", response);
        return response.json();
      })
      .then(data => {
        console.log("두번쨰 then", data);
        console.log("제목", data.title);
        // action
      })
      .catch(error => console.log(err));
  }

  render() {
    const { datas } = this.props;

    console.log("props!!", this.props);
    console.log("데이타 잘 넘어옵니까?", datas);
    return (
      <div>
        <AstronomyCard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state tree", state);
  // let state = {
  //   app: {
  //     datas: []
  //   }
  // }
  return {
    datas: state.app.datas
  };
}
function mapDispatchToProps(dispatch) {
  return {
    action: (type, data) => dispatch({ type, data })
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Astronomy);
