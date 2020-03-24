import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
// import AstronomyCard from "./AstronomyCard";

class Astronomy extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     datas: []
  //   };
  //이걸 reducers 에 넣어주기
  //}

  componentDidMount() {
    // console.log("componentWillMount!!");
    // fetch(
    //   "https://api.nasa.gov/planetary/apod?api_key=bHXdeJkOdPSycslSNZRPptAtkbV9ZJTwxA40m1x2"
    // )
    //   .then(response => response.json())
    //   .then(data =>
    //     this.setState({
    //       datas: data
    //     })
    //   );
    // .catch(error => console.log(err));
  }

  componentWillMount() {
    console.log("야", this.props.datas);
  }

  render() {
    // const { datas } = this.state;

    // console.log("잘되니?", datas);
    return (
      <div>
        <AstronomyCard data={datas} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    datas: state.datas
  };
}

//connect react with redux
//mapStateToProps
//mapDispatchToProps
export default connect(mapStateToProps)(Astronomy);
