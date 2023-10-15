import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useShowCliReportMutation } from '../../Service/reportApi';

const ClientReport = () => {
    const {id} = useParams();
    const http = useLocation();
    const pars = new URLSearchParams(http.search);
    const [clientRep, {data:reports, isSuccess}] = useShowCliReportMutation();
    const [name, setName] = useState('');

    useEffect(() => {
      clientRep({'id':id});
      if(pars){
        setName(pars.get('name' ?? ''));  
      }
    
      return () => {
        
      }
    }, []);
    
  return (
    <div>
    <div className="container text-center">
    <div className='row justify-content-md-center'>
          <div className='col-6'>
          <h5 className="border border-primary m-5 bg-primary bg-opacity-10 shadow p-3 mb-5 rounded">{name}</h5>
          </div>
        </div>
        <div className="row border border-primary rounded bg-primary bg-opacity-25 shadow p-3 mb-5 rounded">
            <div className="col-2">Data</div>
            <div className="col-2">Riferimento</div>
            <div className="col-2">Ore</div>
            <div className="col-2">Persone</div>
            <div className="col-4">Descrizione</div>
        </div>
        {reports?.map((report) => (
          <div className="row bg-primary bg-opacity-10 border-bottom border-primary-subtle shadow p-3 mb-3 rounded">
            <div className="col-2">{report.date}</div>
            <div className="col-2">{report.refer}</div>
            <div className="col-2">{report.hour}</div>
            <div className="col-2">{report.people}</div>
            <div className="col-4">{report.description}</div>
            </div>
        ))}
      </div>
      </div>
  )
}

export default ClientReport