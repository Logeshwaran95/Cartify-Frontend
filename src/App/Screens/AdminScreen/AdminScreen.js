import React from "react";
import {
  DataProvider,
  useCreate,
  useDataProvider,
  useList,
  useNotify,
  useRedirect,
  useRefresh,
  useUpdate,
} from "react-admin";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const AdminDashboard = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={2} style={{ position: "fixed", top: "60px", left: "0" }}>
          <Navbar bg="light" expand="lg"
          className="sidebar"
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Profile</Nav.Link>
                <Nav.Link href="#">Settings</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col xs={12} md={10} style={{ marginLeft: "0" }}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
