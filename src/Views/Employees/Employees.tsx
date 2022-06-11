import React, { useContext, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Spinner } from "reactstrap";

import styles from "./Employees.module.css";

import { useForm } from "../../Hooks/useForm";

const inistialStateEmployee = {
  nombre: "",
  apellido: "",
  fechaNacimiento: "",
};

export const Employees = () => {
  const { form, onChange, setState } = useForm(inistialStateEmployee);
  const { authState, getEmployees, setEmployee, createNewEmployee } =
    useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authState.isLoggedIn) {
      navigate("/");
    } else {
      getEmployees("eduardo_malfavon");
    }
  }, []);

  const handlerActiveForm = (e: React.MouseEvent) => {
    e.preventDefault();
    createNewEmployee();
  };

  const handleSubmitEmployee = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.nombre === "") {
      alert("Ingresa el nombre para poder continuar");
    } else if (form.apellido === "") {
      alert("Ingresa los apellidos para poder continuar");
    } else if (form.fechaNacimiento === "") {
      alert("Ingresa la fecha de nacimiento para poder continuar");
    } else {
      setEmployee({
        name: form.nombre,
        last_name: form.apellido,
        birthday: form.fechaNacimiento.replaceAll("-", "/"),
      });
      setState(inistialStateEmployee);
    }
  };

  return (
    <Container fluid className={styles.ContainerEmployees}>
      {!authState.newEmployee ? (
        <>
          {authState.activeEmployees ? (
            <>
              <Row className={styles.rowEmployeesTable}>
                <MDBDataTable
                  striped
                  bordered
                  small
                  data={authState.employees}
                />
              </Row>
              <Row className={styles.rowContainerButtonRegistro}>
                <Col xs={12} className={styles.colContainerButtonRegistro}>
                  <button
                    type="button"
                    onClick={(e) => handlerActiveForm(e)}
                    className={styles.registroButton}
                  >
                    Nuevo Registro
                  </button>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row className={styles.rowSpinner}>
                <Col xs={12} className={styles.colSpinner}>
                  <Spinner />
                </Col>
              </Row>
            </>
          )}
        </>
      ) : (
        <>
          <Container fluid className={styles.containerFormEmployee}>
            <Row className={styles.rowContainerFormEmployee}>
              <Col xs={12} className={styles.colContainerFormItemsEmployee}>
                <Row className={styles.rowFormItemsEmployee}>
                  <Col xs={6} className={styles.colFormItemEmployee}>
                    <label htmlFor="nombre">Nombre</label>
                  </Col>
                  <Col xs={6} className={styles.colFormItemEmployee}>
                    <input
                      type="text"
                      id="nombre"
                      required={true}
                      value={form.nombre}
                      maxLength={30}
                      onChange={(e) => onChange(e.target.value, "nombre")}
                    />
                  </Col>
                </Row>
                <Row className={styles.rowFormItemsEmployee}>
                  <Col xs={6} className={styles.colFormItemEmployee}>
                    <label htmlFor="apellidos">Apellidos</label>
                  </Col>
                  <Col xs={6} className={styles.colFormItemEmployee}>
                    <input
                      type="text"
                      id="apellidos"
                      required
                      maxLength={30}
                      value={form.apellido}
                      onChange={(e) => onChange(e.target.value, "apellido")}
                    />
                  </Col>
                </Row>
                <Row className={styles.rowFormItemsEmployee}>
                  <Col xs={6} className={styles.colFormItemEmployee}>
                    <label htmlFor="date">Fecha de nacimiento</label>
                  </Col>
                  <Col xs={6} className={styles.colFormItemEmployee}>
                    <input
                      type="date"
                      id="date"
                      required
                      value={form.fechaNacimiento}
                      onChange={(e) =>
                        onChange(e.target.value, "fechaNacimiento")
                      }
                    />
                  </Col>
                </Row>
                <Row className={styles.rowFormItemsEmployee}>
                  <Col xs={12} className={styles.colContainerButton}>
                    <button
                      type="button"
                      onClick={(e) => handleSubmitEmployee(e)}
                      className={styles.formButtonEmployee}
                    >
                      Agregar
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  );
};
