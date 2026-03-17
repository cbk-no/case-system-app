//import CreateCases from "./CreateCases";
import './cases.css';
import CasesList from './CasesList';
import ExampleCases from './ExampleCases';

const Cases: React.FC = () => {
  return (
    <div className="cases-screen">
      <h1 className="cases-title">Cases</h1>
      <p>Total Cases: {ExampleCases.length}</p>
        <CasesList cases={ExampleCases} />
    </div>
  );
};

export default Cases;
