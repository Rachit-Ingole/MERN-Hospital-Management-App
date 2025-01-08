import React from 'react'

export default function Patient(props) {
    const {name,age,gender} = props;
  return (
    <div className='m-[10px] h-fit p-4 mx-1 w-9/12 bg-slate-700 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg '>
        <h1 className='text-bold text-xl'>{name}</h1>
        <h1>Age: {age}</h1>
        <h1>Gender: {gender}</h1>
        <div className='flex justify-between mt-[5px]'>
            <button className='bg-blue-500 rounded-md px-[5px] py-[2px] '>View</button>
            <button className='bg-red-500 rounded-md px-[5px] py-[2px] '>Delete</button>
        </div>
    </div>
  )
}
