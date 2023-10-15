import React, { useEffect, useState } from 'react'
import { useUpdateClientMutation } from '../../Service/clientApi';
import { useLocation, useNavigate, useParams } from 'react-router-dom';



const EditClient = () => {
    const [name, setName] = useState('');
    const [enterprise, setEnterprise] = useState('');
    const [iva, setIva] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [destinatary, setDestinatary] = useState('');
    const [updateClient] = useUpdateClientMutation();
    const navi = useNavigate();

    let {id} = useParams();
    id = Number(id);
    const http = useLocation();
    const pars = new URLSearchParams(http.search);

    useEffect(() => {
   
    
        if(pars){
            setName(pars.get('name' ?? ''));
            setEnterprise(pars.get('enterprise' ?? ''));
            setIva(pars.get('iva' ?? ''));
            setAddress(pars.get('address' ?? ''));
            setEmail(pars.get('email' ?? ''));
            setDestinatary(pars.get('destinatary' ?? ''));
            
        }
    
      return () => {
      }
    }, [])
    


    const verifyLogin = (e) => {
      e.preventDefault();

      updateClient({id, name, enterprise, iva, address, email, destinatary});
      navi('/dashboard/clients');
    };
  return (
    <div>
       <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-6 bg-primary bg-opacity-25 m-5 shadow-lg p-3 mb-5 rounded">
      <form onSubmit={verifyLogin} method="POST">
        <div className="form-group">
          <label>Nome Cliente</label>
          <input
            type="name"
            value={name}
            onChange={(e)=>{ setName(e.target.value)}}
            className="form-control shadow p-3 mb-3 rounded"
            name="name"
            id="name"
            placeholder="Enter Name"
          />
          <label>Nome Impresa</label>
          <input
            type="enterprise"
            value={enterprise}
            onChange={(e)=>{ setEnterprise(e.target.value)}}
            className="form-control shadow p-3 mb-3 rounded"
            name="enterprise"
            id="enterprise"
            placeholder="Enter Enterprise"
          />
          <label>Partita IVA</label>
          <input
            type="iva"
            value={iva}
            onChange={(e)=>{ setIva(e.target.value)}}
            className="form-control shadow p-3 mb-3 rounded"
            name="iva"
            id="iva"
            placeholder="Enter P. IVA"
          />
          <label>Indirizzo Cliente</label>
          <input
            type="address"
            value={address}
            onChange={(e)=>{ setAddress(e.target.value)}}
            className="form-control shadow p-3 mb-3 rounded"
            name="address"
            id="address"
            placeholder="Enter Address"
          />
          <label>Indirizzo Email</label>
          <input
            type="text"
            value={email}
            onChange={(e)=>{ setEmail(e.target.value)}}
            className="form-control shadow p-3 mb-3 rounded"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
          <label>Codice Destinatario</label>
          <input
            type="destinatary"
            value={destinatary}
            onChange={(e)=>{ setDestinatary(e.target.value)}}
            className="form-control shadow p-3 mb-3 rounded"
            name="destinatary"
            id="destinatary"
            placeholder="Enter Destinatary Code"
          />
          <button type="submit" className="btn btn-success m-3">
            Modifica Cliente
          </button>
        </div>
      </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default EditClient