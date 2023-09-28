import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import bread from "./images/kafka-bread.jpg";
import smile from "./images/kafka-smile.jpg";
const item = "banana"; // props
const historyPrices = [
  { date: "30-06-2023", price: "3.99", per: "3", unit: "lb", store: "walmart" },
  {
    date: "31-05-2023",
    price: "2.99",
    per: "3",
    unit: "lb",
    store: "food basics",
  },
  { date: "30-01-2023", price: "1.99", per: "1", unit: "lb", store: "walmart" },
  { date: "30-02-2023", price: "3.99", per: "3", unit: "lb", store: "walmart" },
  { date: "30-03-2023", price: "3.99", per: "3", unit: "lb", store: "walmart" },
  { date: "30-04-2023", price: "3.99", per: "3", unit: "lb", store: "walmart" },
];
let order = 0;

const historyPrice = historyPrices.map((price) => (
  <tr>
    <td>{order++}</td>
    <td>{price.date}</td>
    <td>{price.price}</td>
    <td>{price.per}</td>
    <td>{price.unit}</td>
    <td>{price.store}</td>
  </tr>
));

function OneItemHistoryPrice() {
  return (
    <div>
      <h1> This is item details for {item}</h1>

      <Image src={bread} width="300" height="300" rounded fluid />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Price</th>
            <th>Per</th>
            <th>Unit</th>
            <th>Store</th>
          </tr>
        </thead>
        <tbody>{historyPrice}</tbody>
      </Table>
    </div>
  );
}

export default OneItemHistoryPrice;

// link to google map
{
  /* <a href="https://react.school" target="_blank">
  <Button> Link Button </Button>
</a> */
}
