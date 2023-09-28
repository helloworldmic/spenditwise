import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function LoginPage() {
  return (
    
    <div>
      <h1>This is Login Page</h1>
      <Form>
        <Form.Group>
          <FloatingLabel
            controlId="floatingEmail"
            label="Email address as username"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Email as user ID" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button variant="secondary" type="submit">
          Forget Password
        </Button>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
