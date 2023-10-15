/*<ul className="list-group list-group-flush">
{reports.map((report) => (
  <>
  { (tempDate !== report.date) && <Link to={'/Dashboard/'+ report.date +'/show_report'} className="btn btn-light m-3">{tempDate = report.date}</Link> 
  }
  <li
    key={report.id}
    className="list-group-item d-flex justify-content-between"
  >
    { clients.find(e => e.id === report.client_id)?.name}
    { '-' + report.description}
    <div>
    <button
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
  </li>
  </>
))}
</ul>*/