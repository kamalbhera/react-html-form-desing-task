import logo from './logo.svg';
import './App.css';
import CalendarIcon from "./calendarIcon.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="title">Your full given name:</div>
          <input className="input"></input>
        </div>
        <div style={{ flexDirection: "row" }} className="row">
          <div style={{ width: "40%" }} className="row">
            <div className="title">Date of Birth:</div>
            <div className="dob">
              <img src={CalendarIcon} className="icon"></img>

              <input
                style={{ border: "none", flex: 1, height: "38px" }}
                className="input"
              ></input>
            </div>
          </div>
          <div style={{ width: "55%" }} className="row">
            <div className="title">Country of residence or citizenship:</div>
            <input className="input"></input>
          </div>
        </div>
        <div className="row">
          <div className="title">What school do you plan to attend?</div>
          <input className="input"></input>
        </div>
        <div style={{ height: "180px" }} className="row">
          <div className="title">
            Please take a moment to describe your intended area of study:
          </div>
          <textarea
            placeholder="Enter details here"
            style={{ height: "150px" }}
            className="input"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
