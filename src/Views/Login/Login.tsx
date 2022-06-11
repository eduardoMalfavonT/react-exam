import React from "react";
import { Row, Col, Container } from "reactstrap";

import styles from "./Login.module.css";
import { AuthLoginHook } from "./LoginHooks/AuthLoginHook";

export const Login = () => {
  
  const { form, login, onChange } = AuthLoginHook();

  return (
    <Container className={styles.containerLogin} fluid>
      <Row className={styles.rowLogin}>
        <Col xs={12} className={styles.colLogin}>
          <Container className={styles.containerFormLogin}>
            <Row className={styles.rowFormLoginItem}>
              <Col xs={12} className={styles.colFormLoginTitle}>
                <label htmlFor="username">Username</label>
              </Col>
              <Col xs={12} className={styles.colFormLoginItem}>
                <input
                  type="text"
                  id="username"
                  value={form.email}
                  onChange={(e) => onChange(e.target.value, "email")}
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  onCopy={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                />
              </Col>
            </Row>
            <Row className={styles.rowFormLoginItem}>
              <Col xs={12} className={styles.colFormLoginTitle}>
                <label htmlFor="password">Password</label>
              </Col>
              <Col xs={12} className={styles.colFormLoginItem}>
                <input
                  type='password'
                  id="password"
                  value={form.password}
                  onChange={(e) => onChange(e.target.value, "password")}
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  onCopy={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                />
              </Col>
            </Row>
            <Row className={styles.rowContainerButton}>
              <Col xs={12} className={styles.colContainerButton}>
                <button
                  type="submit"
                  onClick={(e) => login(e)}
                  className={styles.loginButton}
                >
                  Login
                </button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
