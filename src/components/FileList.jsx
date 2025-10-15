// src/components/FileList.jsx
import React, { useState } from "react";

export default function FileList() {
  const [files] = useState([
    { name: "resume.pdf", size: 120000 },
    { name: "photo.jpg", size: 2300000 },
  ]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Your Files</h3>
      <ul>
        {files.map((f, i) => (
          <li key={i}>
            {f.name} ({(f.size / 1024).toFixed(1)} KB)
          </li>
        ))}
      </ul>
    </div>
  );
}
