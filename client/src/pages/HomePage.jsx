import React from 'react'
import {useNavigate} from "react-router-dom"
const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div className='min-h-screen bg-gray-50 px-4 py-8'>
      <div className='max-w-4xl mx-auto' >
        <h1 className='text-4xl font-bold text-center text-gray-800 hover:text-gray-500 transition-colors mb-12' >Medi Book</h1>

        <div className='grid md:grid-cols-3 gap-6'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow' >
            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>Available Tests</h3>
              <p className='text-gray-600 text-sm mb-4' >View all available lab tests and their prices</p>
            </div>
              <button className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors' onClick={()=> navigate("/tests")} >Available Lab Tests</button>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow' >
            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>Book Test</h3>
              <p className='text-gray-600 text-sm mb-4' >Schedule a new lab test appointment</p>
            </div>
        <button className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors' onClick={() => navigate ("book")} >Book a Lab Test </button>

          </div>

          <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow' >
            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>My Past Tests</h3>
              <p className='text-gray-600 text-sm mb-4' >View your past lab tests and download reports</p>
            </div>
        <button className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700' onClick={() => navigate("history")}>History- My Lab Tests</button>

          </div>


        </div>
    </div>
    </div>
  )
}

export default HomePage