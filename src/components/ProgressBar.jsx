// src/components/ProgressBar.jsx
import React from "react";

export default function ProgressBar({ used, total }) {
  const percent = (used / total) * 100;

  return (
    <div style={{ margin: "20px 0" }}>
      <p>Storage Used: {percent.toFixed(2)}%</p>
      <div style={{
        height: "15px",
        backgroundColor: "#ddd",
        borderRadius: "8px",
        overflow: "hidden"
      }}>
        <div style={{
          height: "100%",
          width: `${percent}%`,
          backgroundColor: "#007bff"
        }} />
      </div>
    </div>
  );
}
