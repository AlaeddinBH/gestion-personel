import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <h1>Employee Management</h1>
      <AddEmployee/>
      <EmployeeList/>
    </div>
  );
}

export default App;
