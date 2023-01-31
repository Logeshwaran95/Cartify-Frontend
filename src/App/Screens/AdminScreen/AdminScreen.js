import React from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import StatsCard from "../../Components/StatsCard";
import ChartsCard from "../../Components/ChartsCard";

const AdminDashboard = () => {
 

  return (
    <div>

<Tabs
      defaultActiveKey="dashboard"
      id="uncontrolled-tab-example"
      className="mb-3"
      justify
    >




      <Tab eventKey="dashboard" title="Dashboard">
        <h1>hello</h1>
        <div
        style={{
          margin:"1rem"
        }}
        >
        <StatsCard/>
        <ChartsCard/>
        </div>
    
      </Tab>


      

      <Tab eventKey="product" title="Update Products">
        
        <div>
      
            <Button variant="primary">Add Product</Button>
      
            <Button variant="primary">Update Product</Button>
    
            <Button variant="primary">Delete Product</Button>
    
        </div>






      </Tab>




      <Tab eventKey="orders" title="Handle Orders">
        <h1>hello</h1>
      </Tab>




    </Tabs>

    </div>
    
  );
};

export default AdminDashboard;
