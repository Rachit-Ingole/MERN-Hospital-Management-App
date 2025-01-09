import React, { useEffect, useState } from 'react'





export default function PatientInfo(props) {
    const {selected,setSelected,updatePatientList} = props
    const [data,setData] = useState({_id:'',age:'',gender:'',disease:'',room:'',name:''})
    const [formData,setFormData] = useState({_id:'',age:'',gender:'',disease:'',room:'',name:''})
    const [formError,setFormError] = useState(null)
    const [editable,setEditable] = useState(false)
    useEffect(()=>{
        const getSinglePatient = async () =>{
            try{
                const API_URL = `http://localhost:3000/api/v1/patients/${selected}`
                const {data:actualData} = await axios.get(API_URL)
                let res = actualData.patient
                setData(res)
                setFormData(res)
            }catch(err){
                console.error(err)
            }
        }
        getSinglePatient();
    },[])

    function handleUpdatePatient(e){
        e.preventDefault()
        if(!formData.name || !formData.age || !formData.disease){
            setFormError("Please input all fields");
            return
        }
        let newFormData = {...formData}
        if(!newFormData.gender){
            newFormData.gender = data.gender;
        }
        if(!newFormData.room){
            newFormData.room = data.room;
        }
        const API_URL = `http://localhost:3000/api/v1/patients/${selected}`
        const patchPatient = async () => {
            try {
                await axios.patch(API_URL, { newFormData })
                updatePatientList()
            } catch (error) {
                console.log(error)
            }
        }
      
        patchPatient();
    }


    return (
    <div className='h-screen w-screen flex justify-center items-center bg-gray-900'>
        <div className='w-full mx-[40px] sm:m-0 sm:w-1/2 h-[600px] bg-slate-500 rounded-lg flex flex-col items-center wrap'>
            <h1 className='text-bold text-4xl sm:text-5xl h-[50px] mt-[10px] text-white '>{(data.name).toUpperCase()}</h1>

            <div className='m-[10px] h-full p-4 mx-1 w-9/12 bg-slate-700 bg-gradient-to-r from-slate-700 to-slate-800   rounded-lg '>
            <form className='flex flex-col justify-evenly m-auto text-white gap-4 '>
                
                <div className='w-full text-2xl bg-slate-900 backdrop-opacity-50 rounded-lg p-1 backdrop-blur-xl'>
                
                    <h1 className='  m-1'>Age:-</h1>
                    <input disabled={!editable} name="age" type='number' className='bg-transparent w-full rounded-md p-1' onChange={(e)=>{setFormData({...formData,age:e.target.value})}} value={formData.age}></input>
                    
                </div>
                 
                <div className='w-full text-2xl bg-slate-900 backdrop-opacity-50 rounded-lg p-1 backdrop-blur-xl'>
                    
                    <h1 className='  m-1'>Gender:-</h1>
                    <select disabled={!editable} id="gender" className='bg-transparent w-full rounded-md p-1 text-white' onChange={(e)=>{setFormData({...formData,gender:e.target.value})}} >
                        <option className='text-black' value="prefer not to say" selected={"Prefer not to say" === formData.gender}>Prefer Not to Say</option>
                        <option className='text-black' value="male" selected={"Male" === formData.gender}>Male</option>
                        <option className='text-black' value="female" selected={"Female" === formData.gender}>Female</option>
                        <option className='text-black' value="transgender" selected={"Transgender" === formData.gender}>Transgender</option>
                        
                    </select>
                    
                </div>
                 
                <div className='w-full text-2xl bg-slate-900 backdrop-opacity-50 rounded-lg p-1 backdrop-blur-xl'>
                    
                    <h1 className='  m-1'>Disease:-</h1>
                    <input disabled={!editable} name="disease" className='bg-transparent w-full rounded-md p-1' onChange={(e)=>{setFormData({...formData,disease:e.target.value})}} value={formData.disease}></input>
                    
                </div>

                 
                <div className='w-full text-2xl bg-slate-900 backdrop-opacity-50 rounded-lg p-1 backdrop-blur-xl'>
                    
                    <h1 className='  m-1' >Room No.</h1>
                    <input disabled={!editable} name="roomNumber" type='number' className='bg-transparent w-full rounded-md p-1' onChange={(e)=>{setFormData({...formData,room:e.target.value})}} value={formData.room}></input>
                    
                </div>

                <div className='w-full text-xl text-red-100'>
                    {formError}
                </div>
            </form>
            </div>
            <div className='buttons-container w-full flex justify-evenly mt-[20px] mb-[20px]'>
                {editable ? <button onClick={(e)=>{handleUpdatePatient(e);setEditable(false)}} className='bg-lime-400 rounded-lg px-[10px] py-[5px]'>Save</button>
                : <button onClick={(e)=>{setEditable(!editable)}} className='bg-lime-400 rounded-lg px-[10px] py-[5px]'>Edit</button>}
                <button onClick={(e)=>{
                    if(editable){
                        setEditable(false)
                    }else{
                    setSelected(null)
                }}} className='bg-red-400 rounded-lg px-[10px] py-[5px]'>{!editable?"Back":"Cancel"}</button>
            </div>
        </div>
    </div>
  )
}
