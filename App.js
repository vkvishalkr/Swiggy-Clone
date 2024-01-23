import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "You are in🚀");

const Heading = () => (
  <h1 className="head" tabIndex="5">
    You are in with JSX🚀
  </h1>
);

const title = <h1>This is React Element.</h1>;

// React functional component

const HeadingComponent = () => {
  return <h1 className="heading">This is react functional component</h1>;
};

// This is also react functional component
const HeadingComponent2 = () => (
  <div id="container">
    <Heading />
    {title}
    <h1 className="heading">This is react functional component</h1>
  </div>
);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {resName, cuisine} = props;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5iC3e7B5FZ0c2YdjqmWyJU0E8sAD2Ry0Lw&usqp=CAU" />
      <h3>{props.resName}</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4⭐</h4>
      <h4>25 Minutes</h4>
    </div>
  )
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">
        search
      </div>
      <div className="res-container">
        <RestaurantCard resName = "KFC"/>
        <RestaurantCard resName="Meghana Foods"/>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
