import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
import * as actions from "../actions";

class Astronomy extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     datas: []
  //   };
  // }

  componentDidMount() {
    const { action } = this.props;
    console.log("componentDidMount!!", action);
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
    console.log("데이타 잘 넘어옵니까?", this.props.datas);
    return (
      <div>
        {/* <AstronomyCard /> */}
        <h1>{datas.title}</h1>
        <a href={datas.url}>
          <img src={datas.hdurl} alt={datas.title}></img>
        </a>
        <h3>
          {datas.date} {datas.copyright}
        </h3>
        <p>{datas.explanation}</p>
      </div>
    );
  }
}

//store 안의 state 값을 Props 로 연결해준다.
function mapStateToProps(state) {
  const { datas } = state;
  console.log("state tree1", state);
  console.log("state tree2", state.app.app.datas.title);
  console.log("state tree2", state.app.app.datas.hdurl);
  // let state = {
  //   app: {
  //     datas: []
  //   }
  // }
  return {
    // datas: state.app.data
    datas: state.app.app.datas
  };
}

//해당 액션을 dispatch 하는 함수를 만든후 이를 props 로 연결.
function mapDispatchToProps(dispatch) {
  console.log("state dispatch", dispatch);

  return {
    action: (type, data) => dispatch({ type, data })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const ConnectedComponent = connectToStore(Astronomy);

//컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할.
export default connect(mapStateToProps, mapDispatchToProps)(Astronomy);
