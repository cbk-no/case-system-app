import {
  CasePriority,
  CaseStatus,
  CaseType,
  type Case,
} from "../../types/case";

const ExampleCases: Case[] = [
  {
    id: "a3c1f2b0-9d44-4e1a-8c2e-1f0c9e8b1234",
    title: "Klage på kundebehandling",
    type: CaseType.Complaint,
    dateReceived: "2026-03-20T10:15:00Z",
    deadline: "2026-04-01T23:59:59Z",
    complaintDescription: "Kunden opplevde uhøflig behandling i skranken.",
    priority: CasePriority.High,
    status: CaseStatus.Open,
    description: "Saken må behandles raskt på grunn av mulig omdømmerisiko.",
    emailComplainer: "kunde@example.com",
    userInfoComplainer: "Ola Nordmann, tlf 90000000",
    caseOwnerId: "d2f4c1a1-8b22-4f3c-9a55-2e1c4b7d5678",
  },
  {
    id: "b7e2d4c1-3f55-4a9a-9c77-8e2a1b9c4455",
    title: "Forespørsel om dokumentasjon",
    type: CaseType.Request,
    dateReceived: "2026-03-10T08:00:00Z",
    deadline: "2026-04-15T23:59:59Z",
    complaintDescription: "",
    priority: CasePriority.Low,
    status: CaseStatus.InProgress,
    description: "Bruker ønsker kopi av tidligere innsendte dokumenter.",
    emailComplainer: "bruker@example.com",
    userInfoComplainer: "Kari Hansen, tlf 98888888",
    caseOwnerId: "c1b2a3d4-5e66-4f77-8a88-9b0c1d2e3f44",
  },
  {
    id: "f9a8b7c6-1d2e-4f3a-9b4c-7e6d5c4b3a21",
    title: "Statushenvendelse på tidligere sak",
    type: CaseType.Inquiry,
    dateReceived: "2026-03-18T14:30:00Z",
    deadline: "2026-03-30T23:59:59Z",
    complaintDescription: "Bruker ønsker oppdatering på fremdrift.",
    priority: CasePriority.Medium,
    status: CaseStatus.Open,
    description: "Saken bør prioriteres før fristen utløper.",
    emailComplainer: "status@example.com",
    userInfoComplainer: "Per Olsen, tlf 97777777",
    caseOwnerId: "e4d3c2b1-6a55-4f44-9c33-2b1a0c9d8e77",
  },
];

export default ExampleCases;
