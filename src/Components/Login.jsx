// IMPORTS //
import {useState} from 'react'

function Login(){
    // STATES //
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // FUNCTIONS // 
    const nameChange = (evt) => {
        setName(evt.target.value)
    }
    const emailChange = (evt) => {
        setEmail(evt.target.value)
    }
    const passwordChange = (evt) => {
        setPassword(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    // FETCH // 
    const registerUser = async (evt) => {
        evt.preventDefault()
        const URL = 'http://localhost:9000'
        const resp = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        const data = await resp.json()

        console.log(data)
    }

    return (
        <div>
            <h1>Register</h1>
            <form action="" onSubmit={registerUser}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={nameChange} 
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={emailChange} 
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password} 
                    onChange={passwordChange}
                />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Login