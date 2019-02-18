class App extends React.Component {
  state = {
    userName: "",
    password: "",
    text: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
//    console.log(this.state);
  };

  handleClick = () => {
    this.setState({
      text: this.state.text
    });
  };

  render() {
    // debugger;
    return (
      <div className="popup">
        <p className="popup-title">Are you a Mountain Knight?</p>
        <input
          onChange={this.handleChange}
          className="popup-email"
          type="email"
          name="userName"
          placeholder="Email"
        />
        <input
          onChange={this.handleChange}
          className="popup-password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          onClick={this.handleClick}
          className="popup-button"
          type="submit"
          value="LOG IN"
        />
        <p className="popup-title">{this.state.text}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
