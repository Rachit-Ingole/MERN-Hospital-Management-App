import React from 'react'

export default function Patient(props) {
    const {name,age,gender,_id,updatePatientList,handleViewPatient} = props;

    function handleDeletePatient(e){
      let API_URL = `http://localhost:3000/api/v1/patients/${_id}`
      const deletePatient = async () => {
        try{
          await axios.delete(API_URL)
          updatePatientList()
        }catch(err){
          console.log(err)
        }
      }
      deletePatient();
    }

    



  return (
    <div className='m-[10px] h-fit p-4 mx-1 w-9/12 bg-slate-700 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg '>
        <h1 className='text-bold text-xl'>{name}</h1>
        <h1>Age: {age}</h1>
        <h1>Gender: {gender}</h1>
        <div className='flex justify-between mt-[5px]'>
            <button onClick={(e)=>{handleViewPatient(e,_id)}} className='bg-blue-500 rounded-md px-[5px] py-[2px] '>View</button>
            <button onClick={(e)=>{handleDeletePatient(e)}} className='bg-red-500 rounded-md px-[5px] py-[2px] '>Delete</button>
        </div>
    </div>
  )
}
