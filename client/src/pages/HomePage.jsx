import React from 'react'
import {useNavigate} from "react-router-dom"
const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Medi Book</h1>
        <button onClick={()=> navigate("/tests")} >Available Lab Tests</button>
        <button onClick={() => navigate ("book")} >Book a Lab Test </button>
        <button onClick={() => navigate("history")}>History- My Lab Tests</button>
    </div>
  )
}

export default HomePage