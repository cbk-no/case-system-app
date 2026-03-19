import { Link } from "react-router";
import "./CasesList.css";
import type { CasesObjectsProps } from "./CasesObject";



const CasesList: React.FC<CasesObjectsProps> = ({ cases }) =>{
  
  return (
    <div className="case-objects-container">
      <ul className="case-container">
        <li className="case-list header">
          <span>Title</span>
          <span>Description</span>
          <span>Status</span>
          <span>Priority</span>
        </li>
        {cases.map((caseItem) => (
          <li key={caseItem.id}>
            <Link to={`/cases/${caseItem.id}`} className="case-list row">
              <span className="col">{caseItem.title}</span>
              <span className="col">{caseItem.description}</span>
              <span className="col">{caseItem.status}</span>
              <span className="col">{caseItem.priority}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>

    );
};

export default CasesList;