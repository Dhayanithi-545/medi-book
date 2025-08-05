import React from 'react'
import api from '../api'
import { useState,useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
const BookingHistory = () => {

    const navigate = useNavigate();

    const [bookings, setBookings] = useState([])
    const token = localStorage.getItem("token")

    useEffect(()=>{
        const fetchBookings = async () => {
            const res = await api.get("/bookings", {
                headers: { Authorization: `Bearer ${token}`}
                        })
                                     setBookings(res.data)
        }
        fetchBookings()
    }, []);

    const downloadReport = async(id) => {
        try {
            const res = await api.get(`/reports/${id}`, {
                responseType: "blob" ,
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement("a")  
            link.href = url;
            link.setAttribute("download", "LabTestReport.pdf")
            document.body.appendChild(link)
            link.click();
        } catch (error) {
            alert("this isFailed to download report")
        }
    }
  return (
    <div className='min-h-screen bg-gray-50 px-4 py-8 p-4' >
        <button
            className='text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg'
            onClick={()=>navigate("/home")} >Back
            </button>
            <br />
            <br />
        <div className='max-auto '>
            <div className='flex justify-center'>

                 <h2 className='text-4xl font-bold text-gray-800  py-5 text-center w-[300px] bg-blue-300 rounded-lg' >My Bookings</h2>
            </div>

            {bookings.length === 0 ? (
                <h1>No History found</h1>
            ) : (

                <ul>
                    {bookings.map((booking,index)=>(
                        <li 
                            className='bg-white  rounded-lg p-4 flex flex-col '
                            key={booking._id} >
                                
                                <div className=' text-center text-gray-800 font-medium' >
                                    <span>{index + 1 } . </span>

                                    {booking.test.name} - <span className='text-gray-700' >Booked on {new Date(booking.date).toLocaleDateString()}</span>
                                </div>
                                <div className='flex justify-center'>

                                <button 
                                    className='mt-2 bg-blue-600 w-[200px] w-200px text-white px-4 py-2 px -2 rounded hover:bg-blue-700 transitions duration-200'
                                    onClick={() => downloadReport(booking._id)} >Download Report</button>
                                </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  )
}

export default BookingHistory