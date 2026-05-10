import { useState, useMemo } from "react";
import { Link } from "react-router";
import { useCases } from "src/hooks/useCases";
import { useUsers } from "src/hooks/useUsers";
import CaseStatusBadge from "./components/CaseStatusBadge";
import CasePriorityBadge from "./components/CasePriorityBadge";
import "./CasesList.css";

export default function CasesList() {
  const { data: cases, isLoading, error } = useCases();
  const { data: users } = useUsers();

  // SEARCH + FILTERS
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterUser, setFilterUser] = useState("");

  // SORTING
  const [sortBy, setSortBy] = useState<"title" | "status" | "priority">("title");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  if (isLoading) return <p>Laster saker…</p>;
  if (error) return <p>Kunne ikke hente saker.</p>;

  // ⭐ FILTER + SEARCH + SORT
  const filtered = useMemo(() => {
    let list = [...(cases ?? [])];

    if (search.trim() !== "") {
      list = list.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterStatus) list = list.filter((c) => c.status === filterStatus);
    if (filterPriority) list = list.filter((c) => c.priority === filterPriority);
    if (filterUser) list = list.filter((c) => c.caseOwnerId === filterUser);

    list.sort((a, b) => {
      const A = a[sortBy].toString().toLowerCase();
      const B = b[sortBy].toString().toLowerCase();

      if (A < B) return sortDirection === "asc" ? -1 : 1;
      if (A > B) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return list;
  }, [cases, search, filterStatus, filterPriority, filterUser, sortBy, sortDirection]);

  // ⭐ PAGINATION LOGIC
  const totalPages = Math.ceil(filtered.length / pageSize);

  const paginatedCases = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage]);

  function toggleSort(field: "title" | "status" | "priority") {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  }

  return (
    <div className="cases-list-wrapper">

      {/* ⭐ SEARCH + FILTER BAR */}
      <div className="cases-filters">
        <input
          className="cases-search"
          placeholder="Søk etter tittel…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select value={filterStatus} onChange={(e) => { setFilterStatus(e.target.value); setCurrentPage(1); }}>
          <option value="">Status</option>
          <option value="Open">Open</option>
          <option value="Pending">Pending</option>
          <option value="Closed">Closed</option>
        </select>

        <select value={filterPriority} onChange={(e) => { setFilterPriority(e.target.value); setCurrentPage(1); }}>
          <option value="">Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select value={filterUser} onChange={(e) => { setFilterUser(e.target.value); setCurrentPage(1); }}>
          <option value="">Case Worker</option>
          {users?.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
      </div>

      {/* ⭐ TABLE HEADER */}
      <div className="cases-list-header">
        <span onClick={() => toggleSort("title")} className="sortable">
          Title {sortBy === "title" && (sortDirection === "asc" ? "▲" : "▼")}
        </span>

        <span onClick={() => toggleSort("status")} className="sortable">
          Status {sortBy === "status" && (sortDirection === "asc" ? "▲" : "▼")}
        </span>

        <span onClick={() => toggleSort("priority")} className="sortable">
          Priority {sortBy === "priority" && (sortDirection === "asc" ? "▲" : "▼")}
        </span>

        <span>Details</span>
      </div>

      {/* ⭐ CASE ROWS */}
      {paginatedCases.map((caseItem) => (
        <div key={caseItem.id} className="case-row">
          <span className="case-title">{caseItem.title}</span>

          <CaseStatusBadge status={caseItem.status} />
          <CasePriorityBadge priority={caseItem.priority} />

          <Link className="case-view-btn" to={`/cases/${caseItem.id}`}>
            View
          </Link>
        </div>
      ))}

      {/* ⭐ PAGINATION CONTROLS */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Forrige
        </button>

        <span>
          Side {currentPage} av {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Neste
        </button>
      </div>
    </div>
  );
}
