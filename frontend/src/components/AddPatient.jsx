import React, { useState } from 'react'

export default function AddPatient(props) {
    const [formData,setFormData] = useState({name:"",age:"",gender:"",disease:"",room:""})
    const [formError,setFormError] = useState(null)
    const {setPage,setPList,pList,updatePatientList} = props;
    function handleAddPatient(e){
        e.preventDefault()
        if(!formData.name || !formData.age || !formData.disease){
            setFormError("Please input all fields");
            return
        }
        let newFormData = {...formData}
        if(!newFormData.gender){
            newFormData.gender = "prefer not to say"
        }
        if(!newFormData.room){
            newFormData.room = -1;
        }
        const API_URL = 'http://localhost:3000/api/v1/patients'
        const addPatients = async () => {
            try {
                await axios.post(API_URL, { newFormData })
                updatePatientList()
            } catch (error) {
                console.log(error)
            }
          }
      
        addPatients();
        
        setFormData({name:"",age:"",gender:"",disease:"",room:""})
        setPage("PatientList");
    }
  return (
<div className='h-screen w-screen flex justify-center items-center bg-gray-900'>
      <div className='w-full mx-[40px] sm:m-0 sm:w-1/2 h-[600px] bg-slate-500 rounded-lg flex flex-col items-center wrap'>
        <h1 className='text-bold sm:text-3xl h-[50px] mt-[10px] text-white'>Add Patient</h1>
        <div className='mt-[-10px] w-1/2 h-[2px] bg-slate-700'></div>
        <div className='form-container flex flex-col items-center h-max grow w-full'>
        <form className='flex flex-col justify-evenly m-auto'>
            <div className='w-full text-2xl'>
                <h1 className='text-white m-1'>Name:-</h1>
                <input name="name" className='rounded-md p-1' onChange={(e)=>{setFormData({...formData,name:e.target.value})}} value={formData.name}></input>
            </div>
            <div className='w-full text-2xl'>
                <h1 className='text-white m-1'>Age:-</h1>
                <input name="age" type='number' className='rounded-md p-1' onChange={(e)=>{setFormData({...formData,age:e.target.value})}} value={formData.age}></input>
            </div>
            <div className='w-full text-2xl'>
                <h1 className='text-white m-1'>Gender:-</h1>
                <select id="gender" className='w-full rounded-md p-1' onChange={(e)=>{setFormData({...formData,gender:e.target.value})}} selected={formData.gender} >
                    <option value="prefer not to say" >Prefer Not to Say</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                    
                </select>
            </div>
            <div className='w-full text-2xl'>
                <h1 className='text-white m-1'>Disease:-</h1>
                <input name="disease" className='rounded-md p-1' onChange={(e)=>{setFormData({...formData,disease:e.target.value})}} value={formData.disease}></input>
            </div>
            <div className='w-full text-2xl'>
                <h1 className='text-white m-1' >Room No.</h1>
                <input name="roomNumber" type='number' className='rounded-md p-1' onChange={(e)=>{setFormData({...formData,room:e.target.value})}} value={formData.room}></input>
            </div>
            <div className='w-full text-xl text-red-100'>
                {formError}
            </div>
            <div className='buttons-container w-full flex justify-evenly mt-[20px] '>
                <button onClick={(e)=>{handleAddPatient(e)}} className='text-xl bg-lime-400 rounded-lg px-[10px] py-[5px]'>Add</button>
                <button onClick={()=>{setPage("PatientList")}} className='text-xl bg-red-400 rounded-lg px-[10px] py-[5px]'>Back</button>
            </div>
        </form>
        </div>

      </div>
    </div>
  )
}
