import React from "react";
import { useDropzone } from "react-dropzone";
import styles from "../DropZone/Dropzone.module.css";

export const Dropzone = ({ onDrop, accept }: any) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });
  return (
    <div className={styles.dropZoneContainer} {...getRootProps()}>
      <input className={styles.dropZoneInput} {...getInputProps()} />
      <div className={styles.dropZoneArea}>
        {isDragActive ? (
          <p className={styles.dropZoneDescription}>
            Suelte para almacenar el archivo
          </p>
        ) : (
          <p className={styles.dropZoneDescription}>
            Arrastra y suelta tus archivos aqui, o da click para seleccionarlos
          </p>
        )}
      </div>
    </div>
  );
};
