import CasesObjects, { type CaseObject } from "./CasesObjects";


interface CasesListProps {
  cases: CaseObject[];
}



const CasesList: React.FC<CasesListProps> = ({ cases }) =>{
  return (
    <div className="cases-list">
          <CasesObjects cases={cases} />
    </div>

    );
};

export default CasesList;