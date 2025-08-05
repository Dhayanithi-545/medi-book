import React from 'react'
import api from '../api'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const AvailableTests = () => {
    const [tests, setTests] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchTests = async () => {
            const res = await api.get("/tests");
            setTests(res.data)
        }
        fetchTests()
    },[])

  return (
    
        <div className='max-w-4xl mx-auto' >

            <button
            className='text-white bg-red-600 hover:bg-red-700 px-4 py-2 p-4 rounded-lg'
            onClick={()=>navigate("/home")} >Back
            </button>
        <h1 className='text-4xl font-bold text-center text-gray-800 hover:text-gray-500 transition-colors mb-12' >Available Tests</h1>

        <div className='bg-white rounded-lg shadow-sm border'>
            {tests.map((test,index)=>(
                <div 
                    className='flex justify-between items-center p-4 border-b hover-bg-gray-500 transition-colors' >
                    <div className='px-4 py-3 p-4'>

                        <span  className='font-medium text-gray-900' > {index + 1} . </span>
                        <span  className='font-medium text-gray-800' > {test.name}</span>
                        <span className='text-blue-600 font-semibold ml-2' >${test.price}</span>
                    </div>
                    <button 
                        onClick={()=>navigate("/home/book")} 
                        className='bg-blue-500 text-white px-4 py-2 round hover:pointer hover:bg-blue-600 transition-colors rounded-lg'>
                        Book Test
                    </button>
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default AvailableTests