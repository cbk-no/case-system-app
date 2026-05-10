import { Link } from "react-router";
import CasesList from "./CasesList";
import "./Cases.css";

export default function Cases() {
  return (
    <div className="cases-page">
      <div className="cases-header">
        <h1>Cases</h1>

        <Link className="cases-create-btn" to="/cases/create">
          + Create New Case
        </Link>
      </div>

      <CasesList />
    </div>
  );
}
