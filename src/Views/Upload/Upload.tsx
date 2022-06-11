import React, { useCallback, useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import cuid from "cuid";

import { Dropzone } from "./Components/DropZone/Dropzone";

import styles from "./Upload.module.css";
import ImageList from "./Components/ImageList/ImageList";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Upload = () => {
  const [images, setImages] = useState<any>([]);
  const { authState, uploadImage } = useContext(AuthContext);
  const [counterImage, setCounterImage] = useState<number>(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authState.isLoggedIn) {
      navigate("/");
    } else {
      if (authState.images.length !== 0) {
        setImages(authState.images);
      }
    }
  }, [authState.images]);

  const handleBack = () => {
    if (counterImage > 0) {
      setCounterImage(counterImage - 1);
    }
  };

  const handleNext = () => {
    if (counterImage < authState.images.length - 1) {
      setCounterImage(counterImage + 1);
    }
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    // Loop through accepted files
    acceptedFiles.map((file: any) => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function (e?: any) {
        if (e.target.result.includes("image")) {
          setImages((prevState: any) => [
            ...prevState,
            { id: cuid(), src: e.target.result },
          ]);
          uploadImage([
            ...authState.images,
            { id: cuid(), src: e.target.result },
          ]);
        }
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  const uploadImages = (e: React.MouseEvent) => {
    e.preventDefault();
    uploadImage(images);
  };
  return (
    <Container fluid className={styles.containerDragDrop}>
      <Row className={styles.rowDnDTitle}>
        <Col xs={12} className={styles.colDnDTitle}>
          <h1 className={styles.titleDnD}>Drag and Drop</h1>
        </Col>
      </Row>
      <Row className={styles.rowContainerDnD}>
        <Col xs={12} className={styles.colContainerDnD}>
          <Dropzone onDrop={onDrop} accept={"image/*"} />
        </Col>
      </Row>
      {images.length > 0 && (
        <Row className={styles.rowContainerImageSection}>
          <Col xs={12} className={styles.colContainerImageSection}>
            <Row className={styles.buttonsSection}>
              <Col xs={2} className={styles.colButtonsSection}>
                <button
                  type="button"
                  onClick={() => handleBack()}
                  className={styles.buttonDnD}
                >
                  <FaChevronCircleLeft className={styles.buttonIcon} />
                </button>
              </Col>
              <Col xs={8} className={styles.dndSection}>
                <ImageList images={images} counter={counterImage} />
              </Col>
              <Col xs={2} className={styles.colButtonsSection}>
                <button
                  type="button"
                  onClick={() => handleNext()}
                  className={styles.buttonDnD}
                >
                  <FaChevronCircleRight className={styles.buttonIcon} />
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      {images.length > 0 && (
        <Row className={styles.rowButtonupload}>
          <Col xs={12} className={styles.colButtonUpload}>
            <button
              type="button"
              className={styles.buttonUpload}
              onClick={(e) => uploadImages(e)}
            >
              Cargar imagenes
            </button>
          </Col>
        </Row>
      )}
    </Container>
  );
};
