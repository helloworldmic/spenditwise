// for adding new item and its relevant information
// for editing already existed item, go to list item and click on that item to edit
import React, { useState } from "react";
import { Col, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function AddNewItem(props) {
  const [count, setCount] = useState(0);
  const [newItemData, setNewItemData] = useState({ newItemData: "" });
  // const {
  //   itemName,
  //   itemPrice,
  //   recordDate,
  //   quantity,
  //   unit,
  //   storeLocation,
  //   brand,
  // } = props;

  let submitNewItemForm = () => {
    setCount(count + 1);
    setNewItemData({ newItemData: "new item data dummy" });
  };

  return (
    <div>
      <h1>This is add new item page for price update</h1>
      <Form onSubmit={submitNewItemForm}>
        {/* //FormGroup does not provide on submit event. You can wrap it with form
        element and attach event handler to it: */}
        <Form.Group bsSize="large" className="mb-3" controlId="formItem">
          <Form.Label>New price of an item</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="item name"
            // value={props.itemName}
          />
          <Form.Text className="text-muted">
            You will see the price update on the list for all items .
          </Form.Text>
        </Form.Group>
        <Form.Group bsSize="large">
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="float"
              placeholder="up to 2 decimal places"
              aria-label="Amount (to the nearest dollar)"
              // value={props.itemPrice}
            />
            <InputGroup.Text> per</InputGroup.Text>
            {/* <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">lb</Dropdown.Item>
          <Dropdown.Item href="#">kg</Dropdown.Item>
          <Dropdown.Item href="#">pack</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton> */}
            <Col sm={1}>
              <Form.Control type="integer" placeholder="1" aria-label="" />
            </Col>
            <Col sm={3}>
              <Form.Select align="end" aria-label="Default select example">
                <option>unit</option>
                <option value="lb">lb</option>
                <option value="kg">kg</option>
                <option value="pack">pack</option>
              </Form.Select>{" "}
            </Col>
          </InputGroup>
        </Form.Group>
        <Form.Group bsSize="large" className="mb-3" controlId="formItemBrand">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="brand"
            // value={props.brand}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="add to favourite too" />
        </Form.Group>
        <Form.Group>
          <FloatingLabel
            controlId="itemRemarkFloatingTextarea"
            label="Comments"
          >
            <Form.Control
              as="textarea"
              placeholder="remarks"
              style={{ height: "80px" }}
            />
          </FloatingLabel>
        </Form.Group>
        <p> count: {count} </p>
        <Button
          title={"submitNewItemForm"}
          onClick={submitNewItemForm}
          variant="primary"
          type="submit"
        >
          Submit & View List
        </Button>
        <Button variant="primary" type="submit">
          Cancel
        </Button>
      </Form>
    </div>
  );
}
