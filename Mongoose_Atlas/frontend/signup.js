import React, { useState } from 'react'

const Signup = () => {
    const [user, setUser] = useState({
        "email": "",
        "password": ""
    })
    const handleChange = (e) => {
        const { value, name } = e.target
        setUser((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const handleSubmit = () => {
        fetch("https://proud-lime-rhinoceros.cyclic.app/users/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',

                'Content-Type': "application/json",
                "Authorization":Bearer ${localStorage.getItem("token")}
            },
            body: JSON.stringify(user)
        }).then(res =>res.json())
        .then((data)=>{
            localStorage.setItem('token',data.token)
            console.log(data)
        })

    }
    return (
        <div>
            <h1>Login</h1>

            Email:<input type="text" name="email" onChange={handleChange} value={user.email} /><br />
            password:<input type="text" name="password" onChange={handleChange} value={user.password} /><br />

            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Signup