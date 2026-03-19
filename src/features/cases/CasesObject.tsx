import { Link } from "react-router";
import "./CasesObjects.css";

export interface CaseObject {
  id: string;
  title: string;
  description: string;
  status: "open" | "closed" | "pending";
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  priority: "low" | "medium" | "high";
}

export interface CasesObjectsProps {
  cases: CaseObject[];
}
