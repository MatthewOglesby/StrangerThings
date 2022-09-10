import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import { registerUser } from '../api';

const Register = ({ setToken, navigate }) => {
    //props.setToken
    // const {setToken} = props
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

let loginForm = document.getElementById('loginForm')
let errorMessage = document.getElementById('errorMessage')

const handleSubmit = async() => {
    const results = await registerUser(username, password);
    if (results.success) {
        setToken(results.data.token)
        console.log(results);
        window.localStorage.setItem('token', results.data.token);
        navigate('/home');
    } else {
        console.log(results.error.message)
        loginForm.style.animation = 'shake .5s'
        errorMessage.innerText = results.error.message
        document.getElementsByName('username')[0].value = ''
        document.getElementsByName('password')[0].value = ''
    }

}

    return (
        <div className='loginForm' id='loginForm'>
            <form className='registerForm' onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }
            }>
                <div className='inputDiv'>
                    <label className='inputLabel'>Create Username</label>
                    <input
                        className='userorpass'
                        name='username'
                        type='text'
                        autoFocus
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className='inputDiv'>
                    <label className='inputLabel'>Create Password</label>
                    <input
                        className='userorpass'
                        name='password'
                        type='password'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button className='submit' type='submit'>Register</button>
                <p id='errorMessage'></p>
            </form>
        </div>
    )
}

export default Register;

// Login
// (LocalStorage)
//     - setItem
//         - sets kkey/value pair items
//         - window.localStorage.setItem('token', <token>)
//     - getItem
//         - gets value based on item name
//         - window.localStorage.getItem('token')
//     - removeitem
//         - removes key/value pair in localStorage
//         - window.localStorage.removeItem('token')