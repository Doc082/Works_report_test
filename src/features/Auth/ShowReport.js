import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSendMailMutation, useShowReportMutation } from '../../Service/reportApi';
import { useGetClientQuery } from '../../Service/clientApi';

const ShowReport = () => {
    let {date} = useParams();
    const {data: clients=[]} = useGetClientQuery();
    const [showRep, {data: reports, isSuccess}] = useShowReportMutation();
    const [send] = useSendMailMutation();

    useEffect(() => {
        showRep({'date': date});
    
      return () => {
        
      }
    }, [])
    
    const sendMail = ()=>{
      let object = 'Scheda ' + date;
      let message = '';
      reports?.map((report)=>{
        message += 'Cliente: ' + clients.find(e => e.id === report.client_id)?.name + '\n';
        message += 'Riferimento: ' + report.refer + '\n';
        message += 'Ore: ' + report.hour + ' Persone: ' + report.people + '\n';
        message += 'Descrizione Lavoro:\n';
        message += report.description + '\n';
        message += '------------------------------------\n';
      });
      send({subject: object, message: message});
    }

   
  return (
    <div>
      <div className='container text-center'>
        <div className='row justify-content-md-center'>
          <div className='col-6'>
          <h5 className="border border-primary m-5 bg-primary bg-opacity-10 shadow p-3 mb-5 rounded">{date}</h5>
          </div>
          
        </div>
        
        <div className="row border border-primary rounded bg-primary bg-opacity-25 shadow p-3 mb-5 rounded">
            <div className="col-2">Nome Cliente</div>
            <div className="col-2">Riferimento</div>
            <div className="col-2">Ore</div>
            <div className="col-2">Persone</div>
            <div className="col-4">Descrizione</div>
        </div>
        {reports?.map((report) => (
          <div className="row bg-primary bg-opacity-10 border-bottom border-primary-subtle shadow p-3 mb-3 rounded">
            <div className='col-2'>{ clients.find(e => e.id === report.client_id)?.name}</div>
            <div className="col-2">{report.refer}</div>
            <div className="col-2">{report.hour}</div>
            <div className="col-2">{report.people}</div>
            <div className="col-4">{report.description}</div>
            </div>
        ))}
        <button onClick={sendMail} className="btn btn-primary m-3">
            Send Mail
          </button>
        </div>
      </div>
  )
}

export default ShowReport