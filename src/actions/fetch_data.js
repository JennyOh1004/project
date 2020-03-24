
export default function fetchData() {

return dispatch => {
    dispatch(fetchData())
       console.log("API!!");
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=bHXdeJkOdPSycslSNZRPptAtkbV9ZJTwxA40m1x2"
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          datas: data
        })
    );
}

