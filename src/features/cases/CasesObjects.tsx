import './CasesObjects.css';

export interface CaseObject {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'closed' | 'pending';
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  priority: 'low' | 'medium' | 'high';
}

// Example usage or component to display case objects
import React from 'react';

interface CasesObjectsProps {
  cases: CaseObject[];
}

const CasesObjects: React.FC<CasesObjectsProps> = ({ cases }) => {
  return (
    <div className="case-objects-container">
      <h2 className="case-objects-title">Case Objects</h2>
      <ul className="case-objects-list">
        {cases.map((caseItem) => (
          <li className="case-object-item" key={caseItem.id}>
            <h3 className="case-object-title">{caseItem.title}</h3>
            <p className="case-object-description">{caseItem.description}</p>
            <p className="case-object-status">Status: {caseItem.status}</p>
            <p className="case-object-priority">Priority: {caseItem.priority}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CasesObjects;

