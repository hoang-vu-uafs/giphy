import React from "react";
import axios from "axios";
import "./App.css";

// display trending memes first open
// return new memes based on search term

class App extends React.Component {
  state = {
    url: "",
  };
  async componentDidMount() {
    const data = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "O2VYOt1xUNqjbZw3GP2xlwF8b0ZcYELi",
        q: "cheeseburgers",
        rating: "g",
      },
    });

    console.log(data.data.data);
    this.setState({
      url: data.data.data[0].embed_url,
      url2: data.data.data[0].images.downsized_medium.url,
    });
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  render() {
    return (
      <div className="App">
        <div>
          <iframe src={this.state.url} />
          <img src={this.state.url2} />
        </div>
      </div>
    );
  }
}

export default App;
