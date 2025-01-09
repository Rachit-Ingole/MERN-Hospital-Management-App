import React, { useState } from 'react'
import Patient from './Patient';
import PatientInfo from './PatientInfo';

export default function PatientList(props) {
    const {pList,setPage,updatePatientList} = props;
    const [selected,setSelected] = useState(null)
    function handleViewPatient(e,id){
      setSelected(id)
    }

    return selected ? 
    <PatientInfo updatePatientList={updatePatientList} selected={selected} setSelected={setSelected}/>
    
    
    :
    <div className='h-screen w-screen flex justify-center items-center bg-gray-900'>
      <div className='w-full mx-[40px] sm:m-0 sm:w-1/2 h-[600px] bg-slate-500 rounded-lg flex flex-col items-center wrap'>
        <h1 className='text-bold text-2xl sm:text-3xl h-[50px] mt-[10px] text-white'>Patients List <span className='sm:text-2xl align-top'>({pList.length})</span></h1>
        <div className='m-[2px] w-1/2 h-[2px] bg-slate-700'></div>
        <div className='patient-container flex flex-col items-center h-max grow w-full overflow-auto scroll-width-[10px]'>
          {
          pList.map((value,idx)=>{
            return <Patient handleViewPatient={handleViewPatient} updatePatientList={updatePatientList} _id={value._id} name={value.name} gender={value.gender} age={value.age} key={idx}/>
          })
          }
        </div>
        <div className='buttons-container h-[50px] m-[10px]'>
          <button onClick={()=>{setPage("AddPatient")}} className='bg-lime-400 rounded-lg px-[10px] py-[5px]'>Add Patient</button>
        </div>
      </div>
    </div>
}
