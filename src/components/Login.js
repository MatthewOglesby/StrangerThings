import React, {useState} from 'react';
import { loginUser } from '../api';

const Login = ({ setToken, navigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let loginForm = document.getElementById('loginForm')
    let errorMessage = document.getElementById('errorMessage')

    const handleSubmit = async () => {
        const results = await loginUser(username, password);
        if (results.success) {
            setToken(results.data.token)
            console.log(results);
            window.localStorage.setItem('token', results.data.token);
            navigate('/');
        } else {
            console.log(results.error.message)
            loginForm.style.animation = 'shake 0.5s'
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
                <label className='inputLabel'>Username</label>
                    <input
                        className='userorpass'
                        name='username'
                        type='text'
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className='inputDiv'>
                <label className='inputLabel'>Password</label>
                    <input
                        className='userorpass'
                        name='password'
                        type='password'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button className='submit' type='submit'>Login</button>
                <p id='errorMessage'></p>
            </form>
        </div>
    )
}

export default Login





{/* <div className='loginForm' id='loginForm'>
            <form className='registerForm' onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }
            }>
                <div className='inputDiv'>
                    <input
                        name='username'
                        type='text'
                        placeholder='Enter Username'
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className='inputDiv'>
                    <input
                        name='password'
                        type='password'
                        placeholder='Enter Password'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
                <p id='errorMessage'></p>
            </form>
        </div> */}