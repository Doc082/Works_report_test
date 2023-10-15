import { useEffect, useState } from "react"
import { useLoginMutation } from "../../Service/authService";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "./UserLoggedSlice";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [login, {error, isLoading, data}] = useLoginMutation();
  const dispatch = useDispatch(); 
  const navi = useNavigate();

  const verifyLogin = (e)=>{
    e.preventDefault();
    login({email, password});
  }

  useEffect(() => {
    if(data && data.access_token){
      dispatch(userLoggedIn(data));
      navi('/dashboard/reports');
    }
  
    return () => {
    }
  }, [dispatch, navi, data])
  

  return (
    <div>
      {error && <div class="alert alert-danger" role="alert">
        <strong>Nome utente o password errati</strong>
      </div>}
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-6 bg-primary bg-opacity-25 m-5 shadow-lg p-3 mb-5 rounded">
      <form onSubmit={verifyLogin} method="POST">
        <div className="form-group">
          <label>Nome Utente</label>
          <input
            type="email"
            value={email}
            onChange={(e)=>{ setEmail(e.target.value)}}
            className="form-control shadow p-3 mb-3 rounded"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="form-control shadow p-3 mb-3 rounded"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <button type="submit" className="btn btn-primary m-3">
            Log In
          </button>
        </div>
      </form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default LogIn