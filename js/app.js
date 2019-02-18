class App extends React.Component {
  state = {
    username: "",
    password: "",

  };

  render() {
    // debugger;
    return (
      <div className="popup">
        <p className="popup-title">Are you a Mountain Knight?</p>
        <input
          onChange={this.onChange}
          className="popup-email"
          type="email"
          name="username"
          placeholder="Email"
        />
        <input
          onChange={this.onChange}
          className="popup-password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          onClick={this.onChange}
          className="popup-button"
          type="submit"
          value="LOG IN"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
