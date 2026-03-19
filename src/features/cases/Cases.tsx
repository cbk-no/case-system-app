//import CreateCases from "./CreateCases";
import { Link } from "react-router";
import "./cases.css";
import CasesList from "./CasesList";
import ExampleCases from "./ExampleCases";

const Cases: React.FC = () => {
  return (
    <div className="cases-screen">
      <h1 className="cases-title">Cases</h1>
      <p>Total Cases: {ExampleCases.length}</p>
      <CasesList cases={ExampleCases} />
      <Link className="cases-create-link" to={`/cases/create`}>
        Create Case
      </Link>
    </div>
  );
};

export default Cases;
