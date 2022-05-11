import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [price, setPrice] = useState(0);
  const [position, setPosition] = useState("");
  const [rating, setRating] = useState(0);
  const [country, setCountry] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      game: game,
      price: price,
      position: position,
      rating: rating,
      country: country,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          game: game,
          price: price,
          position: position,
          rating: rating,
          country: country,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Game:</label>
        <input type="text" onChange={(e) => setGame(e.target.value)} />
        <label>Price:</label>
        <input type="number" onChange={(e) => setPrice(e.target.value)} />
        <label>Position</label>
        <input type="text" onChange={(e) => setPosition(e.target.value)} />
        <label>Rating:</label>
        <input type="number" onChange={(e) => setRating(e.target.value)} />
        <label>Country</label>
        <input type="text" onChange={(e) => setCountry(e.target.value)} />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      --------------------------------------------------------------------------------------------------------------------------------------------------
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <h3>Name: {val.name}</h3>
              <h3>Game: {val.game}</h3>
              <h3>Price: {val.price}</h3>
              <h3>Position: {val.position}</h3>
              <h3>Rating: {val.rating}</h3>
              <h3>Country: {val.country}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
