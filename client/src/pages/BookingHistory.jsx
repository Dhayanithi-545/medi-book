import React from 'react'
import api from '../api'
import { useState } from 'react'
import { useEffect } from 'react'
const BookingHistory = () => {

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
                responseType: "blob",
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
            alert("Failed to download report")
        }
    }
  return (
    <div>
        <h2>My Bookings</h2>
        <ul>
            {bookings.map((booking)=>(
                <li key={booking._id} >
                    {booking.test.name} - Booked on {new Date(booking.date).toLocaleDateString()}
                    <button onClick={() => downloadReport(booking._id)} >Download Report</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default BookingHistory