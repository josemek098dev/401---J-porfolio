import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      expanded={expanded}
    >
      <Container className="justify-content-end" style={{ width: '100%' }}>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        >
          {expanded ? (
            <span>
              <i className="bi bi-x-lg xboot"></i>
            </span>
          ) : (
            <span>
              <i className="bi bi-list lboot"></i>
            </span>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end media-flex" style={{ width: '100%' }}>
            <NavLink
              className={({ isActive }) => `nav-item nav-link NavLink ${isActive ? 'active' : ''}`}
              onClick={() => setExpanded(false)}
              to="/"
            >
              Sobre mi
            </NavLink>

            <NavLink
              className={({ isActive }) => `nav-item nav-link NavLink ${isActive ? 'active' : ''}`}
              onClick={() => {
                const recentProjectsElement = document.getElementById('recentprojects');
                recentProjectsElement.scrollIntoView({ behavior: 'smooth' });
                setExpanded(false);
              }}
              to="/"
            >
              Proyectos
            </NavLink>

            <NavLink
              className={({ isActive }) => `nav-item nav-link NavLink ${isActive ? 'active' : ''}`}
              onClick={() => {
                const recentProjectsElement = document.getElementById('recentprojects');
                recentProjectsElement.scrollIntoView({ behavior: 'smooth' });
                setExpanded(false);
              }}
              to="/"
            >
              Contacto
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
