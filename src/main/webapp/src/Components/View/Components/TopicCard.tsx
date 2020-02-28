import React from "react";
import { Topic, State } from "../../../App";
import { css } from "emotion";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import { getTopicById } from "../../../actions";

export interface TopicCardProps {
  topic: Topic;
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  setSelectedTopic: React.Dispatch<React.SetStateAction<Topic | undefined>>;
  deleteTopic: (topic: Topic) => void;
}

const TopicCard = (props: TopicCardProps) => {
  const { topic, setSelectedTopic, deleteTopic, state, setState } = props;
  const { id, name, description } = topic;
  const { apiUrl } = state;

  const handleGetByIdButtonOnClick = () => {
    getTopicById(apiUrl, id).then(async data => {
      setState({
        ...state,
        responsePayload: JSON.stringify(data, undefined, 2)
      });
    });
  };

  return (
    <Card style={{ margin: "10px 10px 10px 0" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ButtonToolbar
          className={css({ button: { marginLeft: "10px" } })}
          style={{ justifyContent: "flex-end" }}
        >
          <Button
            variant="outline-success"
            onClick={() => setSelectedTopic(topic)}
          >
            Edit
          </Button>
          <Button variant="outline-danger" onClick={() => deleteTopic(topic)}>
            Delete
          </Button>
        </ButtonToolbar>
      </Card.Body>
      <Card.Footer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
          }}
        >
          <Card.Subtitle>
            <em>id: {id}</em>
          </Card.Subtitle>
          <Button
            variant="outline-success"
            style={{ marginLeft: "16px" }}
            onClick={handleGetByIdButtonOnClick}
          >
            Get by Id
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default TopicCard;
