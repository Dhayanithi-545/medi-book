import React from 'react'
import api from '../api'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const BookTest = () => {
    const navigate = useNavigate();
    const [tests, setTests] = useState([])
    const [selected, setSelected] = useState("")

    const token = localStorage.getItem("token")

    useEffect(()=>{
        const fetchTests = async () => {
            const res = await api.get("/tests");
            setTests(res.data)
        }
        fetchTests();
    }, [])

    const handleBooking = async () => {
        if(!selected){
            return alert("Kindly Select Test")
        }
        try {
            await api.post(
                "/bookings/",
                {testId: selected},
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            alert("Test Booked")
            navigate("/home")
        } catch (error) {
            alert("Booking Failed")
        }
    }
  return (
    <div className='min-h-screen bg-gray-500 px-4 py-8'>
        <div className='max-w-2xl mx-auto' >
            <div className='bg-white rounded-lg shadow-md p-8'>
                <h2 className='text-2xl font-bold text-gray-800 mb-8 text-center'>Book Lab test</h2>

                <div className='space-y-6'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 ' htmlFor="">Select a test</label>
                        <select
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-transparent'
                            onChange={(e) => setSelected(e.target.value)}>
                                <option value="">Select a Test</option>
                                {tests.map((test) =>(
                                <option value={test._id} key={test._id}>
                                    {test.name} - ${test.price}
                                </option>
                            ))}
                        </select>
            </div>


                <button 
                    className='font-medium flex-1 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors'
                    onClick={handleBooking} >Book Now
                </button>
                <br />
                <button 
                    className='font-medium flex-1 bg-red-600 px-4 py-3 text-white py-3 rounded-lg hover:bg-green-700 transition-colors'
                    onClick={() => navigate("/home")} >cancel
                </button>
                </div>
            </div>
            

            <br />
        </div>
    </div>
  )
}

export default BookTest