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
    <div>
        <h2>Register Here for Medi Book</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Your Name' 
            name = "name"
            value={formData.name}
            onChange={handleChange}

            />

            <br />
            <br />

            <input type="text"
            placeholder='email'
            name="email"
            value={formData.email}
            onChange={handleChange} 
            required/>

            <br /><br />

            <input type="password" 
            placeholder='Password'
            name="password"
            value={formData.password}
            onChange={handleChange}
            required />
            
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register