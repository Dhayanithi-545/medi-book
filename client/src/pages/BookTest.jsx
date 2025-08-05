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
    <div>
        <div>
            <h2>Book Lab Test</h2>
            <select onChange={(e) => setSelected(e.target.value)}>
                <option value="">Select a Test</option>
                {tests.map((test) =>(
                    <option value={test._id} key={test._id}>
                        {test.name} - ${test.price}
                    </option>
                ))}
            </select>

            <br />
            <button onClick={handleBooking} >Book Now</button>
        </div>
    </div>
  )
}

export default BookTest