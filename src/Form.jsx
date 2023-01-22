import React, { useState } from 'react'

export default function Form() {

    const [userRegister, setUserRegister] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const [records, setRecords] = useState("");

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserRegister({ ...userRegister, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const record = { ...userRegister, id: new Date().getTime().toString() } // to get unique id and set it to userRegister object

        setRecords({ ...records, record });

        setUserRegister({ username: "", email: "", phone: "", password: "" }); // to reset the form.
    }

    const reset = () =>{
        setUserRegister({username: "",email: "",phone: "", password: ""});
    }
    return (
        <>
            <div className='forms'>
                <div className='heading'>Contact Me</div>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username :</label>
                        <input type="text" autoComplete='off'
                            value={userRegister.username}
                            onChange={handleInput}
                            name='username' id='name' required />
                    </div>
                    <div>
                        <label htmlFor="Email">Email :</label>
                        <input type="email" autoComplete='off'
                            value={userRegister.email}
                            onChange={handleInput}
                            name='email' id='email' required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone no :</label>
                        <input type="text" autoComplete='off'
                            value={userRegister.phone}
                            onChange={handleInput}
                            name='phone' id='phone' required />
                    </div>
                    <div>
                        <label htmlFor="password">Password :</label>
                        <input type="password" autoComplete='off'
                            value={userRegister.password}
                            onChange={handleInput}
                            name='password' id='password' required />
                    </div>

                    <button type='submit'>Registration</button>
                    <button type='reset' onClick={reset}>Reset</button>
                </form>

                
            </div>
        </>
    )
}
