import React from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import StatsCard from "../../Components/StatsCard/StatsCard";
import ChartsCard from "../../Components/Charts/ChartsCard";
import ScrollToTop from "../../Components/ScrollToTop";
import { textAlign } from "@mui/system";
import "./AdminScreen.css";

const AdminDashboard = () => {
 

  return (
    <div>

      <ScrollToTop />

      <center>
        <h1
        className="titleText"
        >Welcome Admin</h1>
      </center>

<Tabs
      defaultActiveKey="dashboard"
      id="uncontrolled-tab-example"
      className="mb-3"
      justify
    >




      <Tab eventKey="dashboard" title="Dashboard">
        <div
        style={{
          margin:"1rem"
        }}
        >

        <h2
        className="titleText"
        >
          <center>
            Statistics
          </center>
          </h2>  
          <br></br>


        <StatsCard/>

        <br></br>

        <h2
        className="titleText"
        >
          <center>
            Charts
          </center>
        </h2>
        <br></br>
        
        <ChartsCard/>

        <br></br>



        </div>
    
      </Tab>


      

      <Tab eventKey="product" title="Products and Users">

        <h2
        className="titleText"
        >
          <center>
            Handle Products
          </center>
        </h2>
        
        <div
        style={{
          margin:"1rem",
          textAlign : "center",
          display:"flex",
          justifyContent:"space-around",
          alignItems:"center",
          flexWrap:"wrap"

        }}
        >
      
            <Button variant="primary"
            className="adminbtn"
            >Add Product</Button>
      
            <Button variant="primary"
            className="adminbtn"
            >Update Product</Button>
    
            <Button variant="primary"
            className="adminbtn"
            >Delete Product</Button>
    
        </div>

        <h2
        className="titleText"
        >
          <center>
            Handle Users
          </center>
        </h2>
        
        <div
        style={{
          margin:"1rem",
          textAlign : "center",
          display:"flex",
          justifyContent:"space-around",
          alignItems:"center",
          flexWrap:"wrap"

        }}
        >
      
            <Button variant="primary"
            className="adminbtn"
            >Add User</Button>
      
            <Button variant="primary"
            className="adminbtn"
            >Update User</Button>
    
            <Button variant="primary"
            className="adminbtn"
            >Delete User</Button>
    
        </div>






      </Tab>




      <Tab eventKey="orders" title="Handle Orders">

        <h2
        className="titleText"
        >
          <center>
            Orders
          </center>
        </h2>

        
      <table>
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">Products</th>
      <th scope="col">Price</th>
      <th scope="col">Arrival</th>
      <th scope="col">
        Modify Order
      </th>
    </tr>
  </thead>
  <tbody>
   
    <tr>
      <td data-label="Username">Jack</td>
      <td data-label="Products">5</td>
      <td data-label="Price">790</td>
      <td data-label="Arrival">07/10/2022</td>
      <td data-label="Modify Order">
        <Button variant="primary"
        >Update Order</Button>
      </td>

    </tr>

    <tr>
      <td data-label="Username">Jack</td>
      <td data-label="Products">5</td>
      <td data-label="Price">790</td>
      <td data-label="Arrival">07/10/2022</td>
      <td data-label="Modify Order">
        <Button variant="primary"
        >Update Order</Button>
      </td>

    </tr>

    <tr>
      <td data-label="Username">Jack</td>
      <td data-label="Products">5</td>
      <td data-label="Price">790</td>
      <td data-label="Arrival">07/10/2022</td>
      <td data-label="Modify Order">
        <Button variant="primary"
        >Update Order</Button>
      </td>

    </tr>


  </tbody>
</table>


      </Tab>




    </Tabs>

    </div>
    
  );
};

export default AdminDashboard;
