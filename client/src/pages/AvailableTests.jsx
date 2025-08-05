import React from 'react'
import api from '../api'
import { useState } from 'react'
import { useEffect } from 'react'
const AvailableTests = () => {
    const [tests, setTests] = useState([])

    useEffect(()=>{
        const fetchTests = async () => {
            const res = await api.get("/tests");
            setTests(res.data)
        }
        fetchTests()
    },[])
  return (
    <div>
        <h2>Available Lab Test</h2>
        <ul>
            {tests.map((test)=>(
                <li  key = {test._id} >
                    {test.name} - ${test.price}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default AvailableTests