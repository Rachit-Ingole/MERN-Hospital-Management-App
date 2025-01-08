import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Patient from './components/Patient';
import PatientList from './components/PatientList';
import AddPatient from './components/AddPatient';

function App() {
  const [pList , setPList ] = useState([{name:"Rachit",age:"18",gender:"Male"}]);
  const [page, setPage] = useState("PatientList") // 2 states - [PatientList n AddPatient]
  function handleAddPatient(){

  }


  return page == 'PatientList' ? <PatientList setPage={setPage} pList={pList}/> : <AddPatient setPage={setPage} pList={pList} setPList={setPList} />
}

export default App
