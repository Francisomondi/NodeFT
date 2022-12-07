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

  const addEmployee = () => {

    Axios.post('http://localhost:5000/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wages: wages
    }).then(() => console.log("success")).catch(err => console.log(err))
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

      <button onClick={
        addEmployee
      } > Add Employee </button>

      <br></br>
      ==============================================================
      <div className="employees">
        <button>Show employees</button>
      </div>


    </div>







  </div>

}

export default App;