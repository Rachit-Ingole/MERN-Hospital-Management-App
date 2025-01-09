import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Patient from './components/Patient';
import PatientList from './components/PatientList';
import AddPatient from './components/AddPatient';
import PatientInfo from './components/PatientInfo';




function App() {
  
  const [pList , setPList ] = useState([]);
  const [page, setPage] = useState("PatientList") // 2 states - [PatientList n AddPatient]
  

  useEffect( ()=>{
    const getPatients = async () => {
      try{
        const API_URL = 'http://localhost:3000/api/v1/patients'
        const {data:actualData}  = await axios.get(API_URL)
        
        setPList(actualData.patients)
      }catch(err){
        console.error(err)
      }
    }

    getPatients();

  },[])

  function updatePatientList(){
    const getPatients = async () => {
      try{
        const API_URL = 'http://localhost:3000/api/v1/patients'
        const {data:actualData}  = await axios.get(API_URL)
        
        setPList(actualData.patients)
      }catch(err){
        console.error(err)
      }
    }

    getPatients();
  }



  return page == 'PatientList' ? (<PatientList updatePatientList={updatePatientList} setPage={setPage} pList={pList}/>) : <AddPatient updatePatientList={updatePatientList} setPage={setPage} pList={pList} setPList={setPList} />
}

export default App
