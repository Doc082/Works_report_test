import { useRef } from "react";
import { useAddReportMutation } from "../../Service/reportApi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSearchClientMutation } from "../../Service/clientApi";



const AddReport = () => {
    const [addRep] = useAddReportMutation();
    const [search, {data, isSuccess}] = useSearchClientMutation();
    const descriptionEl = useRef('');
    const dateEl = useRef('')
    const hourEl = useRef('')
    const peopleEl = useRef('');
    const clientEl = useRef('');
    const searchEl = useRef('');
    const referEl = useRef('');
    const navi = useNavigate();

    let clientId = 0;
    let client = '';
    if(isSuccess && data && data.name){
      client = data.name;
      //searchEl.current.value = data.name;
    }
    
    const changeCliName = () => {
      search({'name': clientEl.current.value});
    }   

    const searchClick = (e) => {
      if(isSuccess && data && data.name){
        clientEl.current.value = data.name;
        clientId = data.id;
      } 
    }

    const addReport = (e) =>{
        e.preventDefault();
        addRep({
          client_id: clientId,
          date: dateEl.current.value,
          people: peopleEl.current.value,
          hour: hourEl.current.value,
          description: descriptionEl.current.value,
          refer: referEl.current.value,
        });
        
        dateEl.current.value='';
        peopleEl.current.value='';
        hourEl.current.value='';
        descriptionEl.current.value = '';
        referEl.current.value = '';

        navi('/dashboard/reports');
    }  
  return (
    <div>
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-6 bg-primary bg-opacity-25 m-5 shadow-lg p-3 mb-5 rounded">    
      <div className="form-group">
      <label>Cliente</label>
        <input
          onChange={changeCliName}
          ref={clientEl}
          className="form-control shadow p-3 mb-1 rounded"
          name="Client"
          id="Client"
        />
        { client && 
        <>
          <button onClick={searchClick} ref={searchEl} className="btn btn-light form-control shadow p-3 mb-1 rounded">{client}</button>
          
        </>
        }
        { !client &&
          <Link to='/add_client' className="btn btn-light form-control shadow p-3 mb-1 rounded">Aggiungi cliente</Link>
        }
        
        <label>Referimento</label>
        <input
          ref={referEl}
          type="text"
          className="form-control shadow p-3 mb-3 rounded"
          name="Refer"
          id="Refer"
        />
        <label>Data</label>
        <input
          ref={dateEl}
          type="text"
          className="form-control shadow p-3 mb-3 rounded"
          name="Date"
          id="Date"
        />
        <label>Ore</label>
        <input
          ref={hourEl}
          type="number"
          className="form-control shadow p-3 mb-3 rounded"
          name="Hour"
          id="Hour"
        />
        <label>Persone</label>
        <input
          ref={peopleEl}
          type="number"
          className="form-control shadow p-3 mb-3 rounded"
          name="People"
          id="People"
        />
        <label>Descrizione</label>
        <textarea ref = {descriptionEl} className="form-control" name="Description" id="Description" rows="3"></textarea>
        
        <button onClick = {addReport} className="m-1 btn btn-success">Aggiungi Report</button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default AddReport