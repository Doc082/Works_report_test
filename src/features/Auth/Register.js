import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userRegistered } from './UserLoggedSlice';
import FieldError from '../Component/FieldError';
import { useRegisterMutation } from '../../Service/authService';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setName] = useState('');
    const [register, {error, isLoading, data}] = useRegisterMutation();
    const dispatch = useDispatch();
    const navi = useNavigate();

    const verifyRegister = (e)=>{
        e.preventDefault();
        register({email, password, password_confirmation: password2, name});
       // dispatch(userLoggedIn(data));
    }

    useEffect(() => {
      if(data && data.access_token){
        localStorage.setItem('user-data', JSON.stringify(data));
        dispatch(userRegistered(data));
        navi('/dashboard/clients');
    }
    
      return () => {
      }
    }, [dispatch, navi, data])
    const errorMail = error?.data?.errors?.email ?? [];
    const errorName = error?.data?.errors?.name ?? [];
    const errorPwd = error?.data?.errors?.password ?? [];

    
  return (
    <div>
       <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-6 bg-primary bg-opacity-25 m-5 shadow-lg p-3 mb-5 rounded">
      <form onSubmit={verifyRegister} method='POST'>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={(e)=> {setName(e.target.value) }} name="name" className="form-control shadow p-3 mb-3 rounded" id="name" aria-describedby="nameHelp" placeholder="Enter Name" />
          <FieldError errors={errorName}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" value={email} onChange={(e)=> {setEmail(e.target.value) }} name="email" className="form-control shadow p-3 mb-3 rounded" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
        <FieldError errors = {errorMail}/>  
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value)}} name="password" className="form-control shadow p-3 mb-3 rounded" id="password" placeholder="Password" />
         <FieldError errors = {errorPwd}/>
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Password</label>
          <input type="password" value={password2} onChange={(e)=> {setPassword2(e.target.value)}} name="password2" className="form-control shadow p-3 mb-3 rounded" id="confirmpassword" placeholder="Password Again" />
        </div>
        <button disabled={(password !== password2) ? true : false} type="submit" className="btn btn-primary float-right">
          Registrati
        </button>
      </form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Register