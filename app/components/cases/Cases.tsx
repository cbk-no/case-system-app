//import CreateCases from "./CreateCases";
import './cases.css';
import CasesList from './CasesList';
import sampleCases from './examplecases';

const Cases: React.FC = () => {
  return (
    <div className="cases-screen">
      <h1 className="cases-title">Cases</h1>
      <p>Total Cases: {sampleCases.length}</p>
        <CasesList cases={sampleCases} />
    </div>
  );
};

export default Cases;
