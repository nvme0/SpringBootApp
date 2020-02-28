import React, { useState } from "react";
import { Topic, State, PayloadRef } from "../../App";
import { Container, Row } from "react-bootstrap";
import { deleteTopic, getTopics } from "../../actions";
import EditModal from "./Components/EditModal";
import TopicCard from "./Components/TopicCard";
import CreateModal from "./Components/CreateModal";

export interface Props {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  payloadRef?: PayloadRef;
}

const View = (props: Props) => {
  const { state, setState, payloadRef } = props;
  const { topics, apiUrl, view } = state;

  const [selectedTopic, setSelectedTopic] = useState<Topic | undefined>();

  const handleDeleteTopic = (topic: Topic) => {
    deleteTopic(apiUrl, topic).then(async _response => {
      const topics = await getTopics(apiUrl);
      setState({
        ...state,
        view: "listAll",
        topics,
        responsePayload: JSON.stringify(topics, undefined, 2)
      });
    });
  };

  return (
    <Container>
      <Row style={{ justifyContent: "space-between" }}>
        {topics.map(topic => (
          <TopicCard
            {...{
              ...props,
              key: topic.id,
              topic,
              setSelectedTopic,
              deleteTopic: handleDeleteTopic,
              payloadRef
            }}
          />
        ))}
        {!!selectedTopic && (
          <EditModal
            {...{
              topic: selectedTopic,
              state,
              setState,
              modalProps: {
                show: true,
                onHide: () => {
                  setSelectedTopic(undefined);
                }
              }
            }}
          />
        )}
        <CreateModal
          {...{
            state,
            setState,
            modalProps: {
              show: view === "create",
              onHide: () => {
                setState({
                  ...state,
                  view: "listAll"
                });
              }
            }
          }}
        />
      </Row>
    </Container>
  );
};

export default View;
