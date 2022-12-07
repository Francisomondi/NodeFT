import './App.css';
import {
  useState
} from "react";
import Axios from "axios";


function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wages, setWages] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post('http://localhost:5000/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wages: wages
    }).then(() => console.log("success")).catch(err => console.log(err))
  }

  const getEmployees = () => {
    Axios.get('http://localhost:5000/employees')
      .then((response) => setEmployeeList(response.data))
      .catch(err => console.log(err))
  }

  return <div className="App" >
    <div className="information">

      <label> Name </label>
      <input type="text" onChange={event => { setName(event.target.value) }} />
      <label>Age</label>
      <input type="number" onChange={event => { setAge(event.target.value) }} />
      <label> Country </label>
      <input type="text" onChange={event => { setCountry(event.target.value) }} />
      <label> Position </label>
      <input type="text" onChange={(event) => { setPosition(event.target.value) }} />
      <label > Wages(per year) </label>
      <input type="number" onChange={(event) => { setWages(event.target.value) }} />

      <button onClick={addEmployee} > Add Employee </button>

      <br></br>
      ==============================================================
      <div className="employees">
        <button onClick={getEmployees}>Show employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <h2>name: {val.name}</h2>
              <h2>Age: {val.age}</h2>
              <h2> Country: {val.country}</h2>
              <h2>Position: {val.position}</h2>
              <h2>Wages: {val.wages}</h2>
            </div>
          )
        })}
      </div>


    </div>

  </div>

}

export default App;