import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "./ImageList.module.css";

const Image = ({ image }: any) => {
  return (
    <Row className={styles.fileItem}>
      <Col xs={12} className={styles.colFileItem}>
        <img
          alt={`img - ${image.id}`}
          src={image.src}
          className={styles.fileImage}
        />
      </Col>
    </Row>
  );
};

const ImageList = ({ images, counter }: any) => {
  const renderImage = (image: any) => {
    return <Image image={image} />;
  };

  return (
    <Container fluid className={styles.fileList}>
      {images.length !== 0 ? renderImage(images[counter]) : null}
    </Container>
  );
};

export default ImageList;
