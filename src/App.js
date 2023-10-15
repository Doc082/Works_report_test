import React, { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './features/Component/Header';
import { useEffect } from 'react';
import AddReport from './features/Component/AddReport';
import LogIn from './features/Auth/LogIn';
import LogOut from './features/Auth/LogOut';
import Dashboard from './features/Auth/Dashboard';
import PrivateRoute from './features/Component/PrivateRoute';
import EditReport from './features/Component/EditReport';
import AddClient from './features/Component/AddClient';
import EditClient from './features/Component/EditClient';
import Register from './features/Auth/Register';
import ShowReport from './features/Auth/ShowReport';
import ClientReport from './features/Auth/ClientReport';

const initReport = [
  {
    date : new Date().toLocaleDateString(),
    people: 3,
    hour: 8,
    description: 'LorenIpsum'
  },
  {
    date : new Date().toLocaleDateString(),
    people: 1,
    hour: 2,
    description: 'LorenIpsum2'
  },
  {
    date : new Date().toLocaleDateString(),
    people: 1,
    hour: 6,
    description: 'LorenIpsum3'
  },
]

function App() {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    setReports(initReport);
  
    return () => {
    }
  }, [reports])
  
  return (
    <div className="App container-fluid">
      <Router>
        <Header />
        <div className="row d-flex justify-content-center">
        
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/add_report" element = {<PrivateRoute><AddReport/></PrivateRoute>}/>
          <Route path="/add_client" element = {<PrivateRoute><AddClient/></PrivateRoute>}/>
          <Route path="/login" element = {<LogIn/>}/>
          <Route path="/logout" element = {<LogOut/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/edit_report/:id/edit' element = {<PrivateRoute><EditReport/></PrivateRoute>}/>
          <Route path='/edit_client/:id/edit' element = {<PrivateRoute><EditClient/></PrivateRoute>}/>
          <Route path="/Dashboard" element = {<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="/Dashboard/:choice" element = {<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="/Dashboard/:date/show_report" element = {<PrivateRoute><ShowReport/></PrivateRoute>}/>
          <Route path="/Dashboard/:id/show_cli_report" element = {<PrivateRoute><ClientReport/></PrivateRoute>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
