import { Link, useNavigate } from "react-router-dom";
import { useDeleteReportMutation, useGetReportQuery } from "../../Service/reportApi";
import { useGetClientQuery } from "../../Service/clientApi";



const ReportList = () => {
    const {data: reports=[]} = useGetReportQuery();
    const navi = useNavigate();
    const [deleteReport] = useDeleteReportMutation();
    const {data: clients=[]} = useGetClientQuery();
    let tempDate = '';

    const update = (report) =>{
      navi("/edit_report/" +
      report.id +
      "/edit?client_name=" +
      report.client_id +
      "&date=" + 
      report.date.replace('-', '%2D') +
      "&hour=" +
      report.hour +
      "&people=" +
      report.people +
      "&description=" +
      report.description + 
      '&refer=' + 
      report.refer);
    }
    
  return (
    <>
      <Link to='/add_report' className="btn btn-primary m-3"><i className='bi bi-file-earmark-plus-fill m-2'></i>Aggiungi Report</Link>
      <div className="container text-center">
        <div className="row border border-primary rounded bg-primary bg-opacity-25 shadow p-3 mb-5 rounded">
            <div className="col-2">Nome Cliente</div>
            <div className="col-2">Riferimento</div>
            <div className="col-2">Ore</div>
            <div className="col-2">Persone</div>
            <div className="col-2">Descrizione</div>
            <div className="col-2">Azione</div>
        </div>
        {reports.map((report) => (
          <>
          { (tempDate !== report.date) && <div className="row"><Link to={'/Dashboard/'+ report.date +'/show_report'} className="btn btn-outline-primary"><div className="col-12">{tempDate = report.date}</div></Link></div> 
          }
          <div className="row bg-primary bg-opacity-10 border-bottom border-primary-subtle shadow p-3 mb-5 rounded">
            <div className="col-2">{ clients.find(e => e.id === report.client_id)?.name}</div>
            <div className="col-2">{report.refer}</div>
            <div className="col-2">{report.hour}</div>
            <div className="col-2">{report.people}</div>
            <div className="col-2">{report.description}</div>
            <div className="col-2"><button
              onClick={() => update(report)}
              className="btn btn-success m-3"
            >
              <i className="bi bi-pencil-fill"></i>
            </button>
            <button
              onClick={() => deleteReport(report.id)}
              className="btn btn-danger m-3"
            >
              <i className="bi bi-trash"></i>
            </button>
            </div>
          </div>
          </>
        ))}
      </div>
      </>
  );
}

export default ReportList