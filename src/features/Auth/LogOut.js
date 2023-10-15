import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { userLogOut } from "./UserLoggedSlice";
import { useEffect } from "react";


const LogOut = () => {
    const navi = useNavigate();
    const dispatch = useDispatch();
    

  
  
  useEffect(() => {
    dispatch(userLogOut(null));
    window.location.reload();
    navi('/');
  
    return () => {
    }
  }, [navi])
  
    return (
    <div>LogOut...</div>
  )
}

export default LogOut