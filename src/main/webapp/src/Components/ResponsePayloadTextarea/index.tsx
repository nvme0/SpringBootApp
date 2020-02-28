import React from "react";
import { Container, Row, FormControl } from "react-bootstrap";

export interface Props {
  responsePayload?: string;
}

const ResponsePayloadTextarea = (props: Props) => {
  const { responsePayload } = props;
  return (
    <Container style={{ margin: "10px auto" }}>
      <Row>
        <h5>Response Payload</h5>
      </Row>
      <Row>
        <FormControl
          as={"textarea"}
          value={responsePayload}
          style={{ width: "100%", height: "400px", resize: "none" }}
        />
      </Row>
    </Container>
  );
};

export default ResponsePayloadTextarea;
