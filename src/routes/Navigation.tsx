import { useContext } from "react";
import { Routes, Route, NavLink, HashRouter, Navigate } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";

import { Login } from "../Views/Login/Login";

import styles from "./Navigation.module.css";

import logo from "../logo.svg";

import { AuthContext } from "../Context/AuthContext";
import { Employees } from "../Views/Employees/Employees";
import { Upload } from "../Views/Upload/Upload";

export const Navigation = () => {
  const { authState } = useContext(AuthContext);
  return (
    <HashRouter basename="/">
      <Container className={styles.mainLayout} fluid>
        <Row className={styles.mainLayoutRow}>
          <Col xs={2} className={styles.mainLayoutColLogo}>
            <img
              src={logo}
              alt="React Logo"
              className={styles.mainLayoutImage}
            />
          </Col>
          <Col xs={10} className={styles.colHeaderButtons}>
            <Row className={styles.headerButtons}>
              <Col xs={4} className={styles.colHeaderNav}>
                <NavLink to="/" className={styles.headerActive}>
                  Login
                </NavLink>
              </Col>
              {authState.isLoggedIn && (
                <>
                  <Col xs={4} className={styles.colHeaderNav}>
                    <NavLink to="/employees" className={styles.headerActive}>
                      Employees
                    </NavLink>
                  </Col>
                  <Col xs={4} className={styles.colHeaderNav}>
                    <NavLink to="/upload" className={styles.headerActive}>
                      Upload
                    </NavLink>
                  </Col>
                </>
              )}
            </Row>
          </Col>
        </Row>
        <Routes>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/employees" element={<Employees />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </HashRouter>
  );
};
