import React, {useState} from "react";
import { Col, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

// to buy list has two parts: 1. form  2. list view 
export default function ToBuyList() {
  const [count, setCount] = useState(0);
  let submitNewItemForm = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>This is to-buy list. Add a new to-buy </h1>
      <Form>
        <Form.Group bsSize="large" className="mb-3" controlId="formItem">
          <Form.Label>Item to buy</Form.Label>
          <Form.Control size="lg" type="text" placeholder="item name" />
          <Form.Text className="text-muted">
            You will see the update on to buy list.
          </Form.Text>
        </Form.Group>

        <Form.Group bsSize="large">
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="float"
              placeholder="up to 2 decimal places"
              aria-label="Amount (to the nearest dollar)"
            />
            <InputGroup.Text> per</InputGroup.Text>
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
          <Form.Control size="lg" type="text" placeholder="brand" />
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
      <ToBuyList/>
    </div>
  );
}
