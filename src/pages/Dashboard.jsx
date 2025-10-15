// src/pages/Dashboard.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";
import ProgressBar from "../components/ProgressBar";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  const [usedSpace, setUsedSpace] = useState(0);

  return (
    <div className="container">
      <h2 className="heading2">My Drive</h2>
      <button onClick={logout}>Logout</button>
      <ProgressBar used={usedSpace} total={15 * 1024 * 1024 * 1024} />
      <FileUpload onUpload={(size) => setUsedSpace(usedSpace + size)} />
      <FileList />
    </div>
  );
}
