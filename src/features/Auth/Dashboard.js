import { useParams } from "react-router-dom";
import ReportList from "./ReportList";
import ClientList from "./ClientList";

const Dashboard = () => {
  let {choice} = useParams();
  return (
    <>
    {
        <div>
          <h1>Dashboard</h1>
        </div>
    }
    { choice ==='clients' &&
        <div>
          <ClientList/>
        </div>
    }
    { choice === 'reports' &&
        <div>
          <ReportList/>
        </div>
    }
    </>
  );
}

export default Dashboard