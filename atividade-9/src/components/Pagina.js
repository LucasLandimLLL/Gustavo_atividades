"use client";

import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina({ titulo, children }) {
  return (
    <>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/faculdades">Faculdades</Nav.Link>
            <Nav.Link href="/professores">Professores</Nav.Link>
            <Nav.Link href="/disciplinas">Disciplinas</Nav.Link>
            <Nav.Link href="/cursos">Cursos</Nav.Link>

          </Nav>
        </Container>
      </Navbar>


      <div className="bg-secondary text-center text-white py-2">
        <h1>{titulo}</h1>
      </div>

 
      <Container className="mt-2">{children}</Container>
    </>
  );
}
