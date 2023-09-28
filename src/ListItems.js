import "./ListItems.css";
import React from "react";
import * as ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";



const items = [
  {
    id: 0,
    itemName: "banana",
    bestPrice: "0.59",
    secondBestPrice: "0.79",
    unit: "lb",
  },
  {
    id: 1,
    itemName: "beacon",
    bestPrice: "2.99",
    secondBestPrice: "2.99",
    unit: "pack",
  },
  {
    id: 2,
    itemName: "beef chuck",
    bestPrice: "5.99",
    secondBestPrice: "6.99",
    unit: "lb",
  },
  {
    id: 3,
    itemName: "pork butt",
    bestPrice: "2.99",
    secondBestPrice: "3.99",
    unit: "lb",
  },
  {
    id: 4,
    itemName: "chicken drumsticks",
    bestPrice: "1.27",
    secondBestPrice: "1.79",
    unit: "lb",
  },
  {
    id: 5,
    itemName: "hotpot beef",
    bestPrice: "6.99",
    secondBestPrice: "7.99",
    unit: "pack",
  },
];
// const listItemsListItemss = items.map((item) => <li>{item}</li>);
const listItem = items.map((item) => (
  
  // <li>
  <ListGroup.Item>
    <div class="container">
      <div class="row justify-content-md-start">
        <div class="col col-2">
          <input
            className="checkboxOnList"
            type="checkbox"
            aria-label="check to add it into to-buy list"
          ></input>
        </div>
        <div class="col-8">
          {" "}
          <p>
            <b>{item.itemName} :</b>
            {"  $" +
              item.bestPrice +
              "   to  $" +
              item.secondBestPrice +
              "  /" +
              item.unit}
          </p>
        </div>
        <div class="col-1">
          <button type="button" class="btn btn-outline-danger">
            Edit
          </button>
        </div>
      </div>
    </div>
  </ListGroup.Item>

  // </li>
));

function ListItems(props) {
  // const [itemData, setItem] = useState({ data: "" });
const {itemName} = props
  return (
    <div>
      <h1> item list</h1>
      <p>{props.itemName}</p>
      <ListGroup>
        <ListGroup.Item>{listItem}</ListGroup.Item>
      </ListGroup>
    </div>

    // <div className="ListItemsClass">
    //   <h1> Spend't wise </h1>
    //   <ul>{listItemsListItemss}</ul>
    // </div>
  );
}

export default ListItems;
