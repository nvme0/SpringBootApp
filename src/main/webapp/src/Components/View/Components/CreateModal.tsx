import React, { useRef } from "react";
import {
  Button,
  Modal,
  ModalProps,
  FormControl,
  InputGroup
} from "react-bootstrap";
import { State, Topic } from "../../../App";
import { getTopics, createTopic } from "../../../actions";

export interface CreateModalProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  modalProps: ModalProps;
}

const CreateModal = (props: CreateModalProps) => {
  const { state, setState, modalProps } = props;
  const { apiUrl } = state;
  const { onHide } = modalProps;

  const idRef = useRef<FormControl<"input"> & HTMLInputElement>(null);
  const nameRef = useRef<FormControl<"input"> & HTMLInputElement>(null);
  const descriptionRef = useRef<FormControl<"textarea"> & HTMLTextAreaElement>(
    null
  );

  const handleCreateTopic = (topic: Topic) => {
    createTopic(apiUrl, topic).then(async _response => {
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
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Topic
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <label style={{ width: "100%" }}>
            id (is unchangable)
            <FormControl
              {...{
                placeholder: "The reference id",
                ref: idRef
              }}
            ></FormControl>
          </label>
          <label style={{ width: "100%" }}>
            Name
            <FormControl
              {...{
                placeholder: "The name of the topic",
                ref: nameRef
              }}
            />
          </label>
          <label style={{ width: "100%" }}>
            Description
            <FormControl
              {...{
                as: "textarea",
                placeholder: "A description about the topic",
                ref: descriptionRef
              }}
            />
          </label>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => {
            if (idRef.current && nameRef.current && descriptionRef.current) {
              const topic = {
                id: idRef.current.value,
                name: nameRef.current.value,
                description: descriptionRef.current.value
              };
              handleCreateTopic(topic);
            }

            if (onHide) onHide();
          }}
        >
          Update
        </Button>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateModal;
