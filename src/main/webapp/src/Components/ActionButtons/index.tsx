import React from "react";
import { css } from "emotion";
import { Container, Row, Button, ButtonToolbar } from "react-bootstrap";
import { getTopics } from "../../actions";
import { State, PayloadRef } from "../../App";
import { scrollToRef } from "../../helpers";

export interface Props {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  payloadRef?: PayloadRef;
}

const ActionButtons = (props: Props) => {
  const { state, setState, payloadRef } = props;
  const { apiUrl } = state;

  const handleGetTopics = async () => {
    const topics = await getTopics(apiUrl);
    scrollToRef(payloadRef);
    setState({
      ...state,
      view: "listAll",
      topics,
      responsePayload: JSON.stringify(topics, undefined, 2)
    });
  };

  const handleCreateButtonOnClick = () => {
    setState({
      ...state,
      view: "create"
    });
  };

  return (
    <Container>
      <Row>
        <ButtonToolbar
          className={css({ button: { margin: "10px 10px 10px 0" } })}
        >
          <Button variant="success" onClick={handleGetTopics}>
            Get Topics
          </Button>
          <Button variant="success" onClick={handleCreateButtonOnClick}>
            New Topic
          </Button>
        </ButtonToolbar>
      </Row>
    </Container>
  );
};

export default ActionButtons;
