// src/components/FileUpload.jsx
import React from "react";
import { useDropzone } from "react-dropzone";

export default function FileUpload({ onUpload }) {
  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log("File ready to upload:", file.name);
      onUpload(file.size);
      // Later, we’ll send this to backend with axios
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{
      border: "2px dashed #007bff",
      padding: "40px",
      textAlign: "center",
      marginTop: "20px",
      borderRadius: "10px",
      backgroundColor: isDragActive ? "#e9f5ff" : "#fff"
    }}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...</p> : <p>Drag & drop files or click to upload</p>}
    </div>
  );
}
