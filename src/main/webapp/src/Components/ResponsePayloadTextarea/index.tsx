import React from "react";
import { Container, Row, FormControl } from "react-bootstrap";
import { PayloadRef } from "src/App";

export interface Props {
  responsePayload?: string;
  payloadRef?: PayloadRef;
}

const ResponsePayloadTextarea = (props: Props) => {
  const { responsePayload, payloadRef } = props;
  return (
    <Container style={{ margin: "10px auto" }} ref={payloadRef}>
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
