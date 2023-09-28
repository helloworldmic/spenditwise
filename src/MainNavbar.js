import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import ListItems from "./ListItems";
import ToBuyList from "./ToBuyList";

function MainNavBar() {
  return (
    <Navbar>
      {" "}
      <Nav
        activeKey="/listItems"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          {/* <LinkContainer to="/list-items"></LinkContainer> */}

          <Nav.Link>
            <Link to="/list-items">
              {" "}
              <h4> Home</h4>
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          {/* <LinkContainer to="/list-items"> </LinkContainer> */}
          <Nav.Link>
            <Link to="/list-items">
              {" "}
              <h5>All Items</h5>
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          {/* <LinkContainer to="/to-buy-list"></LinkContainer> */}
          <Nav.Link href="/to-buy-list">
            <Link to="/to-buy-list">
              {" "}
              <h5>To-buy List</h5>
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          {/* <LinkContainer to="/add-new-item"></LinkContainer> */}
          <Nav.Link href="/add-new-item">
            <Link to="/add-new-item">
              {" "}
              <h5>Add New Item</h5>
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href= "/item-details">
            <h5>ItemDetails</h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            <h5>Settings</h5>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default MainNavBar;
