import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Julia Veronica",
  location: "Neptunus",
  foodType: "Meat",
  age: 19,
  likes: "I hear and I forget. I see and I understand",
  LineID: "julia_veronica22",
  avatar: "https://avatarfiles.alphacoders.com/854/85469.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="user-deets">
      display user info here. happy coding!
      {/* Show user data here */}
      <img src={user.avatar} alt="..." />
      <h3>{user.name}</h3>
      <p>
        <strong>Location: </strong>
        {user.location}
      </p>
      <p>
        <strong>Eat: </strong>
        {user.foodType}
      </p>
      <p>
        <strong>Age:</strong>
        {user.age}
      </p>
      <p>
        <strong>Likes:</strong>
        {user.likes}
      </p>
      <p>
        <strong>Line: </strong>
        {user.LineID}
      </p>
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
