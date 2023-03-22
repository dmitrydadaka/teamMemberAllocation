import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import { useState, useEffect } from 'react';



function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB')

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
    {
      id: 1,
      fullName: 'jadkjv n;adk',
      designation: 'js dev',
      gender: 'female',
      teamName: 'TeamA'
    },
    {
      id: 2,
      fullName: 'jadkjvdh;fklhlk n;adk',
      designation: 'js dev',
      gender: 'female',
      teamName: 'TeamB'
    },
    {
      id: 3,
      fullName: 'jadkjv nl;fkg;fl;adk',
      designation: 'js dev',
      gender: 'male',
      teamName: 'TeamC'
    },
    {
      id: 4,
      fullName: 'jadkjv nl;fkg;fl;adk',
      designation: 'js dev',
      gender: 'male',
      teamName: 'TeamD'
    }
  ]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value)
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map(employee =>
      employee.id === parseInt(event.currentTarget.id) ? (employee.teamName === selectedTeam) ?
        { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam } : employee);

    setEmployees(transformedEmployees);
  }

  useEffect( () => {

    localStorage.setItem( 'employeeList', JSON.stringify(employees))

  }, [employees]);

  useEffect( () => {

    localStorage.setItem( 'selectedTeam', JSON.stringify(selectedTeam))

  }, [selectedTeam]);

  return (
    <div>
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter( employee => employee.teamName === selectedTeam).length}
      />
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        handleTeamSelectionChange={handleTeamSelectionChange}
        handleEmployeeCardClick={handleEmployeeCardClick}
      />
      <Footer />
    </div>

  );
}

export default App;
