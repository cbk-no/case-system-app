import { Link } from "react-router";
import "./CasesList.css";
import type { CasesProps } from "../../types/case";
import { useCases } from "src/hooks/useCases";
import type {FC} from "react";



const CasesList: FC = () =>{
  const { data, isLoading, error } = useCases();
  
  if (isLoading) return <p>Laster...</p>;
  if (error) return <p>Kunne ikke hente saker.</p>;
  
  return (
    <div className="case-objects-container">
      <ul className="case-container">
        <li className="case-list header">
          <span>Title</span>
          <span>Description</span>
          <span>Status</span>
          <span>Priority</span>
        </li>
        {data?.map((caseItem) => (
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