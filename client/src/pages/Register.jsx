import React from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
        
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await api.post("/auth/register", formData)
            localStorage.setItem("token", res.data.token);
            alert("Registration Successful")
            navigate("/home")
        } catch (error) {
            alert("Registration Failed")
            console.log(error.response?.data?.message)            
        }
    }
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4' >
        <div className='max-w-md w-full bg-white rounded-lg shadow-md p-8' >
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-8'>Register Here for Medi Book</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Your Name' 
            name = "name"
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2'

            />

            <br />
            <br />

            <input type="text"
            placeholder='email'
            name="email"
            value={formData.email}
            onChange={handleChange} 
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2'
            required/>

            <br /><br />

            <input type="password" 
            placeholder='Password'
            name="password"
            value={formData.password}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2'
            onChange={handleChange}
            required />
            <br />
            <br />
            <button type='submit'
            className='w-full bg-blue-600  text-white py-3 px-4 rounded-lg hover:bg-blue-700  font-medium'>Register</button>
        </form>
    </div>
    </div>
  )
}

export default Register