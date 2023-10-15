import React from 'react'
import { useDeleteClientMutation, useGetClientQuery } from '../../Service/clientApi';
import { Link, useNavigate } from 'react-router-dom';

const ClientList = () => {
    const {data: clients=[]} = useGetClientQuery();
    const navi = useNavigate();
    const [deleteReport] = useDeleteClientMutation();

    const update = (client)=>{
      navi('/edit_client/' +
           client.id +
           '/edit?name=' +
           client.name +
           '&enterprise=' + 
           client.enterprise + 
           '&address=' + 
           client.address +
           '&iva=' + 
           client.iva +
           '&email=' +
           client.email +
           '&destinatary=' +
           client.destinatary);
    }
    
  return (
    <div>
      <Link to='/add_client' className="btn btn-primary m-3"><i className='bi bi-person-plus-fill m-2'></i>Aggiungi cliente</Link>
      <div className="container text-center">
        <div className="row border border-primary rounded bg-primary bg-opacity-25 shadow p-3 mb-5 rounded">
            <div className="col-2">Nome Cliente</div>
            <div className="col-2">Impresa</div>
            <div className="col-2">Indirizzo</div>
            <div className="col-1">Iva</div>
            <div className="col-1">Email</div>
            <div className="col-2">Codice Destinatario</div>
            <div className="col-2">Azione</div>
        </div>
        {clients.map((client) => (
          <div className="row bg-primary bg-opacity-10 border-bottom border-primary-subtle shadow p-3 mb-3 rounded">
          <div className="col-2">{client.name}</div>
          <div className="col-2">{client.enterprise}</div>
          <div className="col-2">{client.address}</div>
          <div className="col-1">{client.iva}</div>
          <div className="col-1">{client.email}</div>
          <div className="col-2">{client.destinatary}</div>
          <div className="col-2">
          <button
              onClick={() => update(client)}
              className="btn btn-success m-1"
            >
              <i className="bi bi-pencil-fill"></i>
            </button>
            <Link to={'/Dashboard/'+ client.id + '/show_cli_report?name=' + client.name} className="btn btn-primary m-1"><i className="bi bi-folder-symlink-fill"></i></Link>
            <button onClick = {() => deleteReport(client.id)} className="btn btn-danger m-1"><i className="bi bi-trash"></i></button>
         
            
          </div>
          </div>
        ))}
    </div>
    </div>
  );
}

export default ClientList