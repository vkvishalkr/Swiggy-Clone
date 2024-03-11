import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy Name",
        location: "default location",
      },
    };
    // console.log(this.props.name ,"Child Constructor Called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vkvishalkr");
    const json = await data.json();

    this.setState({
        userInfo : json,
    });

    console.log(json);
  }

  render() {
    // const { name, location } = this.props;
    const {name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
