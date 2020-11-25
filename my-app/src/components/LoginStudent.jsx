import React, {useState} from 'react';
import './LoginAdmin.css';
import {Redirect } from 'react-router-dom';
import axios from 'axios';

const LoginStudent = ()=> {
    const [data, setData] = useState({
        username: '',
        password: '',
        testId: ''
    });
    const [load, setLoad] = useState(false);
    const [err, setError] = useState(0);
    
    const [verified, setVerified] = useState(false);
    const handleChange = e => {
        setData({
            ...data, 
            [e.target.name] : e.target.value
        })
    }
    const auth = async() => {
        console.log("hello");
        const postData = {
            username : data.username,
            password: data.password
        }
        try{
            const res = await axios.post(
                `/api/token/` , 
                postData
            );
            console.log(res);
            if(res.data)
            {
                console.log(res.data);
                if(res.data.access){
                    localStorage.setItem('FBIdToken', `${res.data.access}`);
                    // dispatch({
                    //     type: 'ONBOARD',
                    //     payload: res.data.access
                    // });

                }
               
            }            
        }catch(error){ 
            if(error.response.data.detail==="No active account found with the given credentials"){
                setError(4);
                setLoad(false);
            }   
            setVerified(true);
            console.log(error.response);
        }   
    }
    if(verified)
    {
        return <Redirect to = '/quiz' />;
    }
    const onSubmit = e => {
        e.preventDefault();
        
        if(data.username !== '' && data.password !== ''  && data.testId !== '')
        {
            auth();
        }
        else{
            setError(1);
        }
    }
    return (
        <div>
            <div class="flex-container">
                <div class="content-container">
                    <div class="form-container">
                    <form >
                        <h1>
                        Login
                        </h1>
                        <br/>
                        <br/>
                        <span class="subtitle">TEST ID:</span>
                        <br/>
                        <input type="text" onChange={handleChange} name="testId" value={data.testId}/>
                        <br/><br/>
                        <span class="subtitle">USERNAME:</span>
                        <br/>
                        <input type="text" onChange={handleChange} name="username" value={data.username}/>
                        <br/>
                        <br/>
                        <span class="subtitle">PASSWORD:</span>
                        <br/>
                        <input type="password" onChange={handleChange} name="password" value={data.password}/>
                        <br/><br/>
                        {err=== 1 && <p>Fill all credentials</p>}
                        <br/>
                        <input type="submit" onClick={onSubmit} class="submit-btn"/>
                    </form>
                   
                    </div>
                </div>
                </div>
        </div>
    )
}

export default LoginStudent
